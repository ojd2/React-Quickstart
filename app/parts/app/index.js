import React from 'react'
// eslint-disable-next-line
import styles from 'app'
import ArticleArea from '../../components/article-area'
import TitleArea from '../../components/title-area'

const url = 'http://inescox.com/1st/content/1-projects/3-parergon/inescox_derrida_5.jpg'

export default class App extends React.Component {
  render () {
    return <div>
             <TitleArea className='title_classname' title='Sample Title' />
             <ArticleArea className='article_classname' title='Sample Article' image={url} />
           </div>
  }
}
