<template>
    <v-container>
        <v-carousel>
            <v-carousel-item
                    v-for="picture in pictures"
                    :key="picture"
            >
                <v-img :src="'/images/'+picture">
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                    >
                        <div class="display-3">
                            Бензин
                        </div>
                    </v-row>
                </v-img>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            slider:[
                {
                    id:1,
                    img:'Back1.jpg',
                    title:'Бензин',
                    subtitle:'bla bla bla',
                    btn:{
                        text:"",
                        cssGradient:''
                    }
                }
            ],
            pictures: [
                'Back1.jpg',
                'Back2.jpg',
                'Back3.jpg',
                'Back4.jpg',
                'Back1.jpg',
                'Back2.jpg',
                'Back3.jpg',
                'Back4.jpg',
            ],
        }),
    }
</script>

<style lang="scss">
    $color: red;
    .test {
        color: $color;
    }
</style>
