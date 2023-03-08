import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/114264328?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Bruno Ramos</strong>
                        <span>Web Developer</span>
                    </div>
                    
                </div>

                <time title="11 de Maio as 08:50h"dateTime="2022-05-11 08:50:32">Publicado ha 1hr</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href='#'>👉 jane.design/doctorcare</a></p>

                <p><a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentario' />
                <footer>
                    <button>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                < Comment />
                < Comment />
                < Comment />

            </div>
        </article>
    )
}