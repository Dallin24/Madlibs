import React, {Component} from 'react';

class Content extends Component {
    render() {
        const data = this.props.data;
        //this.props.data.map((object,index) => {
        //    console.log(index);
        //})
        //<span>{data.indexOF(data.color)}</span>
        return (
            <div className="card__content">
            <p>
                Ladies and gentlemen, this is <div className="content__output">1</div><b>{data.color}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <div className="content__output">2</div><b>{data.pluralNoun}</b> and the <div className="content__output">3</div><b>{data.adjectiveOne}</b> Yankees. <div className="content__output">4</div><b>{data.celebOne}</b> is pitching for the Yankees. Here's the pitch! It's a low <div className="content__output">5</div><b>{data.adjectiveTwo}</b> ball that just cuts the inside of the <div className="content__output">6</div><b>{data.nounOne}</b> for a strike. That makes the count <div className="content__output">7</div><b>{data.numberOne}</b> strikes and <div className="content__output">8</div><b>{data.numberTwo}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <div className="content__output">9</div><b>{data.nounTwo}</b> out to <div className="content__output">10</div><b>{data.adjectiveThree}</b> field. But <div className="content__output">11</div><b>{data.celebTwo}</b> is coming up fast and has it for the second out. The next batter up is <div className="content__output">12</div><b>{data.celebThree}</b>, the Cleveland <div className="content__output">13</div><b>{data.adjectiveFour}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <div className="content__output">14</div><b>{data.nounThree}</b>. <div className="content__output">15</div><b>{data.celebFour}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <div className="content__output">16</div><b>{data.adjectiveFive}</b> League! 
            </p>
            </div>
        )
    }
}

export default Content;