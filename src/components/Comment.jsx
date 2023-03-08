import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment (){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/114264328?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}> 
                            <strong>Bruno Ramos</strong>
                            <time title="11 de Maio as 08:50h"dateTime="2022-05-11 08:50:32">Cerca de 1hr atras</time>
                        </div>

                        <button title='Deletar Comentario'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>
                        Muito bom Devon, parabens!!
                    </p>
                </div>


                <footer>
                    <button>
                        <ThumbsUp size={18}/>{'  '}
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
        
    
}
