import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src = {logo} alt='Jobify' className='logo' />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job<span>Tracking</span>App</h1>
                    <p>I'm baby edison bulb umami before they sold out pop-up cornhole. Venmo whatever wayfarers edison bulb. Jean shorts mumblecore affogato XOXO, kale chips marfa single-origin coffee cray stumptown. Mustache bitters vice banjo tousled chambray, synth blue bottle franzen drinking vinegar. Succulents thundercats shoreditch intelligentsia.</p>
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <img src={main} alt= "Job Hunt" className="img main-img"></img>
            </div>
            
        </Wrapper>
    )
}

const Wrapper = styled.main`
    nav{
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page{
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }
    h1{
        font-weight: 700;
        span{
            color: var(--primary-500);
        }
    }
    p{
        color: var(--grey-600);
    }
    .main-img{
        display: none;
    }
    @media(min-width: 992px){
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img{
            display: block;
        }
    }
`

export default Landing
