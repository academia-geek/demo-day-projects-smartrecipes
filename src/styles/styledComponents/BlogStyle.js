import styled from 'styled-components';

export const BlogContainer = styled.div`

    height: 1000px;

    width: 100%;
    padding: 10px;
    margin: 0px;
    overflow-y: scroll;
`
export const MainBlog = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* @media only screen and (min-width: 600px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.5rem;
    margin-bottom: 0;
    justify-content: space-evenly
  } */
`
export const ImagenBlog= styled.img`
    width: 400px;
    height: 200px;
    margin: auto;
`

export const ArticleBlog = styled.article`
    padding: 1rem;
    text-align: center;
`

export const TitleBlogInicial = styled.p`
    color: gray;
    font-style: italic;
`
export const AnchorBlog = styled.a`
    text-decoration: none;
`
