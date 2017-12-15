import React from 'react';
import './Index.css';
import { Button,Container,Icon } from 'semantic-ui-react'
import BackgroundSlideshow from 'react-background-slideshow'
var image1 = 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t35.0-12/25383164_2053023074714820_2071646762_o.jpg?oh=28d370e6292864715310edb09553c2cb&oe=5A34A9C7'
var image2 = 'http://hpe.gov.vn/upload/10049/20160526/grab1464232140thuong_mai_dien_tu_viet_nam_2016_xu_huong_di_dong_7743_1.jpg'
var image3 = 'https://www.raconteur.net/wp-content/uploads/2017/02/Apttus-1280x720.jpg'
var image4 = 'https://scontent.fbkk4-1.fna.fbcdn.net/v/t35.0-12/25434212_2054113837939077_1294300683_o.jpg?_nc_eui2=v1%3AAeFBgsPYN_Y2XkfzYW_EUQU-kjsaEOQgTF467kwxdsMGxXsdrZY3zJwSy-LBQWBuic40yxIGat4U3DbaBtZq72RgBfyOhq1Pd8O5HeEzy5ASJg&oh=368d87ed3ed7ad95c0b20a851c3e14a1&oe=5A3564A1'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <div class="img" ><BackgroundSlideshow images={[image1, image2, image3, image4]} /></div>
                <Container textAlign='center' fluid>
                <Icon name='exchange' size='huge' color='red' /><br/>
                <a href="/home" >
                <Button  color='red' animated='fade' size='massive'>
                <Button.Content visible>
                    YOU WANT SOMETHING!?!
                </Button.Content>
                <Button.Content color='red' size='massive' hidden>
                    LET'S SWAAAAP !!!
                </Button.Content>
                </Button>
                </a>
                </Container>


            </div>

        )
    }
}
