import React from 'react';
import './cardHome.css';
import Button from '@material-ui/core/Button';
import Image from '../../images/home_image.jpeg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class CardHome extends React.Component {

    goToEscolheCarros(){
        window.location.href = "escolheCarros";
    }

    render(){
        return (
            <Card className="card-style">
                <CardActionArea>
                    <CardMedia
                        className="car-media-style"
                        component="img"
                        alt="MG Revendedora"
                        image={Image}
                        title="MG Revendedora"
                        onClick={this.goToEscolheCarros}
                    />
                    <CardContent className="card-content-style" onClick={this.goToEscolheCarros}>
                        <Typography gutterBottom variant="h5" component="h2">
                            MG Revendedora
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Encontre o melhorcarro para você
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div>
                    <Button className="button5" onClick={this.goToEscolheCarros}>Entrar</Button>
                </div>
            </Card>
        )
    }
}
export default CardHome;
