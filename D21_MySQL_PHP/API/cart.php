<?php
            // let _data=[{
            //     ID:"product001",
            //     title:"Products001",
            //     price:"1000",
            //     image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558430551223&di=d5e27bff8ea3d60562cacca2597564be&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F19747%2F19746655.jpg"
            // },{
            //     ID:"product002",
            //     title:"Products002",
            //     price:"1000",
            //     image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558430602283&di=0bfea9e9bfbd626ef6603b5fca59dac8&imgtype=0&src=http%3A%2F%2Fg2.hexunimg.cn%2F2014-09-24%2F168807657.jpg"
            // }];
            function main(){
                switch($_POST["ID"]){
                    case "products001":
                        echo '[{
                                  ID:"product001",
                                  title:"Products001",
                                  price:"1000",
                                  image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558430551223&di=d5e27bff8ea3d60562cacca2597564be&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F19747%2F19746655.jpg"
                              }]';
                        break;
                    case "products002":
                        echo '[{
                                  ID:"product002",
                                  title:"Products002",
                                  price:"1000",
                                  image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558430602283&di=0bfea9e9bfbd626ef6603b5fca59dac8&imgtype=0&src=http%3A%2F%2Fg2.hexunimg.cn%2F2014-09-24%2F168807657.jpg"
                              }]';
                        break;
                    default:
                        echo '[{
                                  ID:"product001",
                                  title:"Products001",
                                  price:"1000",
                                  image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558430551223&di=d5e27bff8ea3d60562cacca2597564be&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F19747%2F19746655.jpg"
                              },{
                                  ID:"product002",
                                  title:"Products002",
                                  price:"1000",
                                  image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558430602283&di=0bfea9e9bfbd626ef6603b5fca59dac8&imgtype=0&src=http%3A%2F%2Fg2.hexunimg.cn%2F2014-09-24%2F168807657.jpg"
                              }]';
                }
            }
            main();
?>