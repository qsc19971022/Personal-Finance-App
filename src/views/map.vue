<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-form-item>
                    详细地址：
                    <el-input
                            v-model="address"
                            name="address"/>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="4">
                <el-form-item>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item>
                    经度：
                    <el-input
                            v-model="lat"
                            name="lat"
                            type="number"/>
                </el-form-item>
            </el-col>
            <el-col :span="2">
                <el-form-item>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item>
                    纬度：
                    <el-input
                            v-model="lng"
                            name="lng"
                            type="number"/>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="4">
                <el-form-item>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item>
                    省份：
                    <el-input
                            v-model="province"
                            min="0"
                            name="price"/>
                </el-form-item>
            </el-col>
            <el-col :span="1">
                <el-form-item>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item>
                    市：
                    <el-input
                            v-model="city"
                            min="0"
                            name="full"/>
                </el-form-item>
            </el-col>
            <el-col :span="1">
                <el-form-item>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-form-item>
                    区：
                    <el-input
                            v-model="district"
                            min="0"
                            name="reduction"/>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="4">
                <el-form-item>
                </el-form-item>
            </el-col>
            <el-col :span="14">
                <!-- <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult">
                </el-amap-search-box> -->
                <!-- 地图 -->
                <div class="amap-page-container">
                    <br/>
                    <span style="color: red"> 选择位置点击一下就可以了（要是地图没有出来，刷新一下页面） </span>
                    <el-amap
                            vid="amapDemo1"
                            :center="center"
                            :zoom="zoom"
                            class="amap-demo"
                            :events="events">
                    </el-amap>
                    <div class="toolbar">
                        <br/>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import AMap from "vue-amap"
    export default {
        data() {
                let self = this;
            return {
                zoom: 12,
                center: [121.59996, 31.197646],
                address: '',
                province: '',
                city: '',
                district: '',
                lng: '',
                lat: '',
                events: {
                    click(e) {
                        let {lng, lat} = e.lnglat;
                        self.lng = lng;
                        self.lat = lat;

                        // 这里通过高德 SDK 完成。
                        var geocoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: "all"
                        });

                        geocoder.getAddress([e.lnglat.lng, e.lnglat.lat], function (status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.regeocode) {
                                    // 具体地址
                                    self.address = result.regeocode.formattedAddress;
                                    // 省
                                    self.province = result.regeocode.addressComponent.province;
                                    // 市
                                    self.city = result.regeocode.addressComponent.city;
                                    // 区
                                    self.district = result.regeocode.addressComponent.district;
                                    self.$nextTick();
                                }
                            } else {
                                //alert('地址获取失败')
                            }
                        });
                    }
                },

            }
        },
    }
</script>
<style>
    .amap-demo {
        height: rem;
    }
</style>