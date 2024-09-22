import React from "react";
import style from "./RankingComponents.module.css";

function Ranking() {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.card_Title}>
                    <h1>RANKING TREE</h1>
                </div>
                <div className={style.card_Body}>
                    <ul className={style.list}>
                        <li className={style.list_Item}>
                            <div className={style.list_Item_header}>
                                <img className={style.list_Icon} src="https://licensingcon.com.br/wp-content/uploads/2019/08/CocaCola.png" alt="Logo CocaCola" />
                            </div>

                            <div className={style.list_Item_Body}>
                                <span className={style.list_Item_Titule}>
                                    POSIÇÃO:            1°
                                </span>

                                <span className={style.list_Item_Titule}>
                                    EMPRESA:  Coca-cola
                                </span>
                                <span className={style.list_Item_Subtitle}>
                                    pontos: 60
                                </span>
                                <div className={style.list_Item_Progress_Bar}>
                                    <span className={style.Progress} style={{ width: '60%' }}></span>
                                </div>
                            </div>
                        </li>

                        <li className={style.list_Item}>
                            <div className={style.list_Item_header}>
                                <img className={style.list_Icon} src="https://fariart.com.br/blog/wp-content/uploads/2023/04/logo-fanta-2017.jpg" alt="Logo Fanta" />
                            </div>
                            <div className={style.list_Item_Body}>
                                <span className={style.list_Item_Titule}>
                                    POSIÇÃO 2°
                                </span>

                                <span className={style.list_Item_Titule}>
                                    EMPRESA: Fanta
                                </span>
                                <span className={style.list_Item_Subtitle}>
                                    pontos: 40
                                </span>
                                <div className={style.list_Item_Progress_Bar}>
                                    <span className={style.Progress} style={{ width: '40%' }}></span>
                                </div>
                            </div>
                        </li>

                        <li className={style.list_Item}>
                            <div className={style.list_Item_header}>
                                <img className={style.list_Icon} src="https://fariart.com.br/blog/wp-content/uploads/2023/03/pepsi-2014-logo-1.jpg" alt="Logo Pepsi" />
                            </div>
                            <div className={style.list_Item_Body}>
                                <span className={style.list_Item_Titule}>
                                    POSIÇÃO 3°
                                </span>

                                <span className={style.list_Item_Titule}>
                                    EMPRESA: Pepsi
                                </span>

                                <span className={style.list_Item_Subtitle}>
                                    pontos: 10
                                </span>
                                <div className={style.list_Item_Progress_Bar}>
                                    <span className={style.Progress} style={{ width: '10%' }}></span>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div>
                    <button className={style.mini_Card}>
                        <a href="#">Saiba mais</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Ranking;