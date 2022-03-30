* {
  margin: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a img {
  width: 11rem;
  padding: 1px 20px 5px;
}

.header {
  z-index: 99;
  height: 3.4rem !important;
  /*si lo quiere pegado  position: fixed;*/
  width: 100%;
  top: 0;
  left: 0;
  -webkit-filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.35));
          filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.35));
  -webkit-box-shadow: 5px 0 13px rgba(0, 0, 0, 0.5);
          box-shadow: 5px 0 13px rgba(0, 0, 0, 0.5);
}

.nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: 'Ubuntu';
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.nav :hover {
  color: #7FCFA7;
}

.nav-link {
  color: black;
  text-decoration: none;
}

.nav-menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
}

.nav-menu-item {
  font-size: 0.9rem;
  font-weight: bolder;
  line-height: 3.4rem;
  text-transform: uppercase;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

#flag {
  width: 50px;
  margin-top: 32%;
}

.nav-menu-link {
  padding: 1px 12px;
  border-radius: 3px;
}

/* TOGGLE */
.nav-toggle {
  /* no tocar*/
  color: black;
  background: none;
  border: none;
  font-size: 28px;
  padding: 0 20px;
  line-height: 60px;
  cursor: pointer;
  display: none;
}
.flag{
  width: 40px;
  margin-top: 20px;
}

/* MOBILE */
@media (max-width: 768px) {
  /*  body {
     padding-top: 70px; si lo quiere pegado
    }*/
  .header {
    height: 3.4rem;
    -webkit-filter: none;
            filter: none;
  }
  .logo {
    font-size: 25px;
    padding: 0 20px;
    line-height: 60px;
  }
  .nav-menu {
    z-index: 99;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin: 0;
    background-color: white;
    position: fixed;
    top: 53px;
    width: 100%;
    padding: 20px 0;
    height: calc(100% - 60px);
    overflow-y: auto;
    left: 100%;
    -webkit-transition: left 0.3s;
    transition: left 0.3s;
  }
  .nav-menu-item {
    line-height: 50px;
  }
  .nav-menu-link:hover,
  .nav-menu-link_active {
    background: none;
    color: #7FCFA7;
  }
  .nav-toggle {
    display: block;
  }
  .nav-menu_visible {
    left: 0;
  }
  .nav-toggle:focus:not(:focus-visible) {
    outline: none;
  }
}

.banner-card {
  z-index: 0;
}

.banner-card img {
  max-width: 100%;
  height: auto;
}

.banner-text {
  position: absolute;
  top: 22%;
  left: 1%;
  padding: 10px;
}

@media (max-width: 768px) {
  .banner-text {
    position: absolute;
    top: 6%;
    left: 1%;
    padding: 10px;
  }
}


.title {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500 medium;
  font-size: 56px;
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .title {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500 medium;
    font-size: 27px;
    background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
    background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.title2 {
  font-family: 'Ubuntu';
  font-style: normal;
  padding-top: 3%;
  font-weight: 900, bolder;
  font-size: 20px;
  color: #1F1E22;
  line-height: 23px;
  letter-spacing: 0px;
}

@media (max-width: 768px) {
  .title2 {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 900, bolder;
    font-size: 14px;
    padding-top: 20%;
    color: #1F1E22;
    letter-spacing: 0px;
  }
}

.title3 {
  font-family: 'Ubuntu';
  /* PONER*/
  font-style: normal;
  font-weight: bolder;
  font-size: 15px;
  padding-top: 2%;
  color: #1F1E22;
}
@media (max-width: 768px) {
  .title3{
    display: none;
  }
}

.title4 {
  font-family: 'Ubuntu';
  /* PONER*/
  font-style: normal;
  font-weight: bolder;
  font-size: 17px;
  padding-top: 2%;
  color: #1F1E22;
}



.title6 {
  font-family: 'Ubuntu';
  /* PONER*/
  font-style: normal;
  font-weight: bolder;
  font-size: 15px;
  color: #1F1E22;
}
@media (max-width: 768px) {
  .title6{
    display: none;
  }
}
.title5 {
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  border-radius: 40px;
  position: absolute;
  left: 25%;
  top: 105%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  font-weight: 900;
  color: white;
  border: none;
  margin: 5px;
  text-decoration: none;
  height: 32px;
  -webkit-box-shadow: 5px 6px 10px rgba(1, 6, 0, 0.4);
          box-shadow: 5px 6px 10px rgba(1, 6, 0, 0.4);
  width: 150px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .title5 {
    background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
    background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
    border-radius: 40px;
    position: absolute;
    left: 65%;
    top: 75%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 12px;
    font-weight: 900;
    color: white;
    border: none;
    margin: 5px;
    text-decoration: none;
    height: 27px;
    -webkit-box-shadow: 5px 6px 10px rgba(1, 6, 0, 0.4);
            box-shadow: 5px 6px 10px rgba(1, 6, 0, 0.4);
    width: 100px;
    cursor: pointer;
  }
}


.titleCarousel {
  padding-top: 3%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.titleCarousel .textCarousel1 {
  font-family: 'Ubuntu';
  /* PONER*/
  font-weight: 700 bold;
  font-size: 46px;
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .titleCarousel .textCarousel1 {
    font-size: 18px;
  }
}

@media (max-width: 450px) {
  .titleCarousel .textCarousel1 {
    font-size: 21px;
    position: relative;
    left: 2px;
  }
}

.titleCarousel .textCarousel2 {
  font-family: 'Ubuntu';
  font-size: 22.4px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color: #585858;
  padding-top: 1.4%;
}

@media (max-width: 768px) {
  .titleCarousel .textCarousel2 {
    font-size: 17px;
  }
}

@media (max-width: 450px) {
  .titleCarousel .textCarousel2 {
    font-size: 13px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    color: #585858;
    padding-top: 0%;
    margin: 10px;
  }
}

#carrusel {
  background-position: cover;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  #carrusel {
    z-index: -2;
    display: none;
  }
}

#carrusel .carousel {
  width: 61%;
  left: 21%;
}

@media (max-width: 768px) {
  #carrusel .carousel {
    z-index: 0;
    height: 270px;
  }
}

@media (max-width: 450px) {
  #carrusel .carousel {
    height: 180px;
  }
}

#carrusel .carousel-indicators {
  position: absolute;
  bottom: -7%;
}

#carrusel .carousel-indicators button {
  border-radius: 50%;
  height: 0.9rem;
  width: 0.883rem;
  background-color: #7FCFA7;
}

@media (max-width: 450px) {
  #carrusel .carousel-indicators button {
    height: 0.5rem;
    width: 0.493rem;
  }
}

#carrusel .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  position: absolute;
  bottom: 60%;
}

@media (max-width: 450px) {
  #carrusel .carousel-control-prev-icon {
    width: 50%;
  }
}

#carrusel .carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  position: absolute;
  bottom: 60%;
}

@media (max-width: 450px) {
  #carrusel .carousel-control-next-icon {
    width: 50%;
  }
}

.endCarousel {
  margin-top: 3%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 19.4px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: #585858;
  font-family: 'Ubuntu';
  height: 142px;
}

@media (max-width: 450px) {
  .endCarousel {
    font-size: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
}

.endCarousel .verMas {
  background: white;
  border-radius: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #7FCFA7;
  border: #5C9578 1px solid;
  margin: 5px;
  text-decoration: none;
  height: 33px;
  -webkit-box-shadow: 5px 5px 8px 4px rgba(1, 6, 0, 0.4);
          box-shadow: 5px 5px 8px 4px rgba(1, 6, 0, 0.4);
  width: 150px;
  cursor: pointer;
}

@media (max-width: 450px) {
  .endCarousel .verMas {
    height: 30px;
    width: 80px;
    font-size: 13px;
  }
}

.queEs {
  padding-top: 3%;
}

@media (max-width: 768px) {
  .queEs img {
    width: 100%;
  }
}

.queEs .queEsText {
  position: absolute;
  padding: 10px;
  bottom: -187%;
  left: 37%;
}

@media (max-width: 768px) {
  .queEs .queEsText {
    position: absolute;
    padding: 5px;
    bottom: -60%;
    left: 31%;
  }
}

@media (max-width: 768px) and (max-width: 450px) {
  .queEs .queEsText {
    bottom: 42%;
    left: 23%;
  }
}

.queEs .queEsText .queEsTitle {
  font-family: 'Ubuntu';
  /* PONER*/
  font-style: normal;
  font-weight: 500 medium;
  font-size: 40px;
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .queEs .queEsText .queEsTitle {
    font-size: 30px;
  }
}

@media (max-width: 450px) {
  .queEs .queEsText .queEsTitle {
    font-size: 21px;
  }
}

.queEs .queEsText .queEsTitle2 {
  font-family: 'Ubuntu';
  /* PONER*/
  font-style: normal;
  padding-top: 3%;
  font-weight: 900, bolder;
  font-size: 20px;
  color: #1F1E22;
  line-height: 23px;
  letter-spacing: 1px;
  position: relative;
  left: -13%;
}

@media (max-width: 768px) {
  .queEs .queEsText .queEsTitle2 {
    font-size: 15px;
  }
}

@media (max-width: 450px) {
  .queEs .queEsText .queEsTitle2 {
    font-size: 11px;
  }
}

.queEs .queEsText .queEsTitle3 {
  font-family: 'Ubuntu';
  /* PONER*/
  font-style: normal;
  font-weight: 900, bolder;
  font-size: 20px;
  color: #1F1E22;
  line-height: 23px;
  letter-spacing: 1px;
  position: relative;
  left: -23%;
}

@media (max-width: 768px) {
  .queEs .queEsText .queEsTitle3 {
    font-size: 15px;
  }
}

@media (max-width: 450px) {
  .queEs .queEsText .queEsTitle3 {
    display: none;
  }
}

.infoyvideos {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.infoyvideos img {
  width: 50%;
}

.infoyvideos .videos {
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  border-radius: 40px;
  position: absolute;
  left: 19%;
  bottom: -344%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  font-weight: 900;
  color: white;
  border: none;
  margin: 5px;
  text-decoration: none;
  height: 32px;
  -webkit-box-shadow: 5px 6px 10px rgba(1, 6, 0, 0.4);
          box-shadow: 5px 6px 10px rgba(1, 6, 0, 0.4);
  width: 150px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .infoyvideos .videos {
    left: 19%;
    bottom: -104%;
    font-size: 10px;
    height: 16px;
    width: 75px;
  }
}

@media (max-width: 450px) {
  .infoyvideos .videos {
    bottom: 6%;
  }
}

.infoyvideos .informacion {
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  border-radius: 40px;
  position: absolute;
  left: 69%;
  bottom: -344%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  font-weight: 900;
  color: white;
  border: none;
  margin: 5px;
  text-decoration: none;
  height: 32px;
  -webkit-box-shadow: 5px 6px 10px rgba(1, 6, 0, 0.4);
          box-shadow: 5px 6px 10px rgba(1, 6, 0, 0.4);
  width: 150px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .infoyvideos .informacion {
    left: 70%;
    bottom: -134%;
    font-size: 10px;
    height: 16px;
    width: 75px;
  }
}

@media (max-width: 450px) {
  .infoyvideos .informacion {
    bottom: 6%;
  }
}

.nuestraComunidad {
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 241, 239, 0.6)), to(rgba(147, 126, 243, 0.6)));
  background: linear-gradient(180deg, rgba(255, 241, 239, 0.6) 0%, rgba(147, 126, 243, 0.6) 100%);
  height: 700px;
}

@media (max-width: 768px) {
  .nuestraComunidad {
    height: 1300px;
  }
}

.nuestraComunidad .titleComunidad {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: 'Ubuntu';
  /* PONER*/
  font-weight: 700 bold;
  font-size: 46px;
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .nuestraComunidad .titleComunidad {
    font-size: 27px;
    padding: 10px;
  }
}

.nuestraComunidad .textComunidad {
  font-family: 'Ubuntu';
  font-size: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color: #585858;
}

@media (max-width: 768px) {
  .nuestraComunidad .textComunidad {
    display: none;
  }
}

.nuestraComunidad .cardsNuestraComunidad {
  padding-top: 2%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
}

@media (max-width: 768px) {
  .nuestraComunidad .cardsNuestraComunidad {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
}

.nuestraComunidad .cardsNuestraComunidad .card {
  -webkit-box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
}

.nuestraComunidad .cardsNuestraComunidad .card img {
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

.nuestraComunidad .cardsNuestraComunidad .card .card-title {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nuestraComunidad .cardsNuestraComunidad .card .card-text {
  font-family: Ubuntu;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: center;
  color: #A1AEB7;
}

.loMejorYogumba {
  background: -webkit-gradient(linear, left top, left bottom, color-stop(-7.63%, rgba(255, 255, 255, 0.6)), to(rgba(255, 241, 239, 0.6)));
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) -7.63%, rgba(255, 241, 239, 0.6) 100%);
  padding-top: 5%;
  height: 630px;
}

@media (max-width: 450px) {
  .loMejorYogumba {
    padding-top: 190%;
    height: 1360px;
  }
}

.loMejorYogumba .titleLoMejor {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: 'Ubuntu';
  /* PONER*/
  font-weight: 700 bold;
  font-size: 46px;
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 450px) {
  .loMejorYogumba .titleLoMejor {
    font-size: 34px;
  }
}

.loMejorYogumba .textLoMejor {
  font-family: Ubuntu;
  font-size: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color: #585858;
}

@media (max-width: 450px) {
  .loMejorYogumba .textLoMejor {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 9px;
  }
}

.loMejorYogumba .cardsLoMejor {
  padding-top: 2%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
}

@media (max-width: 450px) {
  .loMejorYogumba .cardsLoMejor {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
}

.loMejorYogumba .cardsLoMejor .card {
  -webkit-box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
}

.loMejorYogumba .cardsLoMejor .card img {
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

.loMejorYogumba .cardsLoMejor .card .firstTextCard {
  font-family: 'Ubuntu';
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
}

.loMejorYogumba .cardsLoMejor .card .card-title {
  font-family: 'Ubuntu';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: left;
}

.loMejorYogumba .cardsLoMejor .card .card-text {
  font-family: 'Ubuntu';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #666666;
}

#lastSection {
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 241, 239, 0.6)), to(rgba(147, 126, 243, 0.6))) !important;
  background: linear-gradient(180deg, rgba(255, 241, 239, 0.6) 0%, rgba(147, 126, 243, 0.6) 100%) !important;
}

@media (max-width: 450px) {
  #lastSection {
    height: 1700px;
  }
}

.footer {
  padding-top: 3%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

@media (max-width: 450px) {
  .footer {
    padding-top: 270%;
  }
}

.footer img {
  width: 220px;
  position: relative;
  left: -1%;
}

.footerNav {
  padding-top: 2%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 100%;
}

.footerNav a {
  padding-top: 1%;
  text-decoration: none;
  font-family: 'Ubuntu';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  width: 8%;
  color: #505D68;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
}

@media (max-width: 768px) {
  .footerNav a {
    width: 12%;
  }
}

@media (max-width: 450px) {
  .footerNav a {
    font-size: 12px;
    width: 15%;
  }
}

.FinText {
  padding-top: 3%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: Kaufmann BT;
  font-size: 36px;
  font-style: italic;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
  background: -webkit-gradient(linear, left top, left bottom, from(#7B61FF), to(#937EF3));
  background: linear-gradient(180deg, #7B61FF 0%, #937EF3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 450px) {
  .FinText {
    font-size: 22px;
  }
}

.barraFinal {
  margin-top: 2%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  border-top: 1px solid #FFF1EF;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 241, 239, 0.6)), to(rgba(147, 126, 243, 0.6)));
  background: linear-gradient(180deg, rgba(255, 241, 239, 0.6) 0%, rgba(147, 126, 243, 0.6) 100%);
}

.barraFinal p {
  padding: 6px;
  font-family: 'Ubuntu';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFF1EF;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

.wrapper .owl-nav {
  color: white;
}

.wrapper .owl-dot.active span {
  width: 10px !important;
  background-color: #7FCFA7 !important;
}

.wrapper .owl-dot:hover span {
  width: 10px !important;
  background-color: #7FCFA7 !important;
}

.wrapper {
  position: absolute;
  top: 147%;
  padding: 0 60px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

@media (max-width: 768px) {
  .wrapper {
    display: none;
  }
}

.wrapper .owl-prev,
.wrapper .owl-next {
  position: absolute;
  top: 44%;
  font-size: 2rem !important;
  background-color: #7FCFA7 !important;
  width: 50px;
  height: 50px;
  font-weight: bold;
  border-radius: 100% !important;
}

.wrapper .owl-prev b,
.wrapper .owl-next b {
  position: relative;
  top: -2px;
}

.wrapper .owl-prev:hover,
.wrapper .owl-next:hover {
  color: #000 !important;
}

.wrapper .owl-prev {
  left: -20px;
}

.wrapper .owl-next {
  right: -40px;
}

.item1 {
  height: 270px;
  width: 420px;
  background-image: url("/primersilde.png");
  background-size: cover;
}

.item2 {
  background-image: url("/segundosilde.png");
  background-size: cover;
  height: 270px;
  width: 420px;
}

.item3 {
  background-image: url("/tercersilde.png");
  background-size: cover;
  height: 270px;
  width: 420px;
}

.item4 {
  background-image: url("/cuartosilde.png");
  background-size: cover;
  height: 270px;
  width: 420px;
}

.item5 {
  background-image: url("/quintosilde.png");
  background-size: cover;
  height: 270px;
  width: 420px;
}

.wrapper .owl-item {
  opacity: .7;
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
}

.wrapper .owl-item.center {
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}

.leroy {
  width: 1230px;
}

.nuestraComunidad {
  background: -webkit-gradient(linear, left top, left bottom, color-stop(-7.63%, rgba(255, 255, 255, 0.6)), to(rgba(255, 241, 239, 0.6)));
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) -7.63%, rgba(255, 241, 239, 0.6) 100%);
  padding-top: 2%;
  height: 630px;
}

.nuestraComunidad .titleNuestraComu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: 'Ubuntu';
  /* PONER*/
  font-weight: 700 bold;
  font-size: 46px;
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 450px) {
  .nuestraComunidad .titleNuestraComu {
    font-size: 34px;
  }
}

.nuestraComunidad .textNuestraComu {
  font-family: Ubuntu;
  font-size: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: 20px;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: #585858;
}

@media (max-width: 450px) {
  .nuestraComunidad .textNuestraComu {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 9px;
  }
}

.nuestrasClases {
  position: relative;
  bottom: 80px;
  height: 530px;
}

.nuestrasClases .titleNuestrasClases {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: 'Ubuntu';
  /* PONER*/
  font-weight: 700 bold;
  font-size: 46px;
  background: -webkit-gradient(linear, left top, left bottom, from(#7FCFA7), to(#5C9578));
  background: linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 450px) {
  .nuestrasClases .titleNuestrasClases {
    font-size: 34px;
  }
}
/*# sourceMappingURL=app.css.map */
