import styled from "styled-components";

export const PeriperalsContainer = styled.div`
min-height:500px;
`
export const Periperals = styled.div`
display: grid;
justify-content:center;
grid-template-columns:repeat(4,auto);
gap:25px;
padding:20px;
`

export const PeriperalsBox = styled.div`
min-height: 350px;
width:400px;
border:1px solid black;
padding:15px;
`

export const PeriperalsImage = styled.div`
display:grid;
justify-content:center;
.perip-img{
    height:180px;
}
`
export const PeriperalsInfo = styled.div`
text-align:center;
padding:20px;
ul{
    list-style:none;
}
li{
    padding:5px;
}
`

export const PeriperalsButton = styled.div`
display:grid;
justify-content:center;
gap:10px;
.btn-cart,
.btn-prod{
    height:30px;
    width:120px;
    cursor:pointer;
}
`