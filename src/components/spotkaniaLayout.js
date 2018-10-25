import React from "react"
import layoutStyle from "./css/layout.module.css";
import bartekImg from "../img/bartek.jpeg"
import patiImg from "../img/pati.jpeg"
import mainImage from "../img/mainImage.jpg"
export default ({ children }) => (
    <div className={layoutStyle.spotkaniaLayout}>
        <div className={layoutStyle.title}>
            <h1>Esencja</h1>
        </div>
        <div className={layoutStyle.flexContainer}>
            <div className={layoutStyle.flex60}>
                <div className={layoutStyle.groupImage}>
                    <img src={mainImage} alt=""/>
                </div>
                <div className={layoutStyle.groupDescription}>
                    <h3 className={layoutStyle.groupTitle}>Opis grupy</h3>
                    <p className={layoutStyle.groupText}>Łączy nas pragnienie, by wiara przenikala nasze życie we wszystkich jego aspektach, podobnie jak w przypadku naszej świętej patronki, włoskiej lekarki, kochającej żony i matki. By czyniła zeń fascynującą przygodę, którą chcemy przeżywać wspólnie dzieląc się naszymi doświadczeniami na drodze ku Bogu Ojcu. W bieżącym roku akademickim nasze spotkania opierają się na treści papieskiej adhortacji Gaudete et exsultate, która przypomina nam, że wszyscy bez wyjątku jesteśmy powołani do świętości i możemy to powołanie realizować w każdych warunkach. Zapraszamy tych, dla których pasją jest życie i tych, którzy w swym życiu poszukują pasji.</p>
                </div>
            </div>

            <div className={layoutStyle.flex40}>
                <h3 className={layoutStyle.personalTitle}>Odpowiedzialni</h3>
                <div className={layoutStyle.personalDescription}>   
                        <img src={patiImg} alt="" className={layoutStyle.personalImage}/>
                        <p className={layoutStyle.personalInformation}><b>Patrycja Klimczak</b></p>
                        <p className={layoutStyle.personalInformation}>patrycjaKlimczak@gmail.com</p>
                        <p className={layoutStyle.personalInformation}><a href="https://www.facebook.com/">Facebook</a></p>
                </div>
                <div className={layoutStyle.personalDescription}>   
                        <img src={bartekImg} alt="" className={layoutStyle.personalImage}/>
                        <p className={layoutStyle.personalInformation}><b>Bartosz Piotrowski</b></p>
                        <p className={layoutStyle.personalInformation}>bartoszPiotrowski@gmail.com</p>
                        <p className={layoutStyle.personalInformation}><a href="https://www.facebook.com/">Facebook</a></p>
                </div>
            </div>
        </div>
    </div>
)
