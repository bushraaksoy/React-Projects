import About from './About';
import Footer from './Footer';
import PersonalDetails from './PersonalDetails';

const Texts = () => {
    return (
        <div className='texts'>
            <PersonalDetails />
            <About />
            <Footer/>
        </div>
    )
}

export default Texts