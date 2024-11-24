import React from "react";
import style from "./RankingComponents.module.css"
import { companies } from "./Company/Companies";
import HomeNavBarComponent from "@/components/layout/homeNavBar/homeNavBarComponent";

interface Company {
    position: number;
    logo: string;
    name: string;
    descricao: string;
}

function Card() {
    return (
        <>
            <HomeNavBarComponent />
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.card_search}>
                        <form >
                            <label htmlFor="search">PESQUISA</label>
                            <input name="search" id="search" placeholder="Ex: estado" />
                        </form>
                    </div>
                    {companies.map((company) => (
                        <div key={company.position} className={style.card_item}>
                            <div className={style.position}>{company.position}</div>
                            <img src={company.logo} alt={company.name} className={style.card_logo} />
                            <div className={style.card_info}>
                                <h2>{company.name}</h2>
                            </div>
                            <div className={style.card_item_inform}>
                                <p>{company.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Card;