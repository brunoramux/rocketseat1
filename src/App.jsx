import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';


import './global.css';
import styles from './App.module.css';



const posts  = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/114264328?v=4',
      name: 'Bruno Ramos Lemos' ,
      role: 'CTO Rocketseat',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'}, 
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:03:58'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes' ,
      role: 'Educador',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraaa 👋'}, 
      {type: 'paragraph', content: 'Ola. Esse e o texto do segundo item do array 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-07 20:03:58'),
  },
];

const comments = [
  1,
  2,
  3,
  
]


export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>

    
      

      
    </div>
  )
}

