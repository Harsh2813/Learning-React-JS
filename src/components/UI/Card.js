import './Card.css';

const Card = (props) => {// ye props pura content h Card wrapper ke andar ka jaha bhi use kiye Card as wrapper
    const classes = 'card ' + props.className; // className me only one class le sakte and all as a string to pehle classes me hmne Card ki default class 'card' li jisme css apply ho rhi fir add kr diye props.className mtlb pure content ki saari class to classes me sari class as a string agyi
    return <div className= {classes}>{props.children}</div>;
    // hmne classes me sari class as a string li aur className me classes le li as a class fir props.children me sari class apply ho jayengi
    //Note - props.children ye children ek reserved keyword h props ka hm ise pass ni krte balki children pura content hota h including tags classes and all content jaha bhi ye Component use karenge  uska card wrapper ke andar ka pura content.
}
// we made this Card component as reusable component
export default Card;