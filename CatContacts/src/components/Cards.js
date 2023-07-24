import Card from '../components/Card';

const Cards = () => {
    return (
        <div className='cards'>
            <Card img={require('../images/cat1.jpg')} name='Mr. Whiskers' phone='+7883764524' email='whiskers@gmail.com' />
            <Card img={require('../images/cat2.jpg')} name='Mrs. Sushi' phone='+7777764524' email='ginger@gmail.com'  />
            <Card img={require('../images/cat3.jpg')} name='Mrs. Fluffers' phone='+7893765524' email='fluffer@gmail.com'  />
            <Card img={require('../images/cat4.jpg')} name='Mr. Ginger' phone='+7898864524' email='sushi@gmail.com'  />
            <Card img={require('../images/cat5.jpg')} name='Mr. Marshmallow' phone='+7893764524' email='marshy@gmail.com'  />
            <Card img={require('../images/cat6.jpg')} name='Mr. Knickers' phone='+7897764524' email='knickers@gmail.com'  />
        </div>
    )
}

export default Cards;