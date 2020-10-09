import React,{useState, useEffect} from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import styles from "../../styles/templates/post/question.module.css"

export default ({ data }) => {
    const [CheckBox, setCheckBox] = useState("");
    const [Response, setResponse] = useState();
    const post = data.wpPost.QuestionArticle;
    
    useEffect(() => {
        if(CheckBox === ""){
            
        }
        else if(CheckBox === post.questionresponse){
            setResponse(post.questionresponsetext);
        }
        else{
            setResponse("Faux");
        }
    },[CheckBox]);


    return (
        <Layout>
            <div className={ styles.questionTest }>
                <h2>{ post.questiontext } ?</h2>
                <div className={styles.allResponses}>
                    <p onClick={ () => { setCheckBox("1") } }>{ post.questionsuggestion1 }</p>
                    <p onClick={ () => { setCheckBox("2") } }>{ post.questionsuggestion2 }</p>
                    <p onClick={ () => { setCheckBox("3") } }>{ post.questionsuggestion3 }</p>
                    <p onClick={ () => { setCheckBox("4") } }>{ post.questionsuggestion4 }</p>                    
                </div>
                <a href={ post.questionurl }/>
                <div className={ styles.response }>
                    { Response }
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query($slug: String!) {
    wpPost(slug: {eq: $slug}) {
      QuestionArticle {
        questionresponse
        questionresponsetext
        questionsuggestion1
        questionsuggestion2
        questionsuggestion3
        questionsuggestion4
        questiontext
        questionurl
      }
    }
  } 
`