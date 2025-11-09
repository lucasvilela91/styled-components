import tags from "./tags.json"
import styled from "styled-components"

const TituloTags = styled.h2`
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
`

const TagsContainer = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 36px;
`

const TagsFiltro = styled.div`
    display: flex;
    gap: 12px;
    font-size: 24px;
    font-weight: 400;
    button {
        background: rgba(217, 217, 217, 0.3);
        border: 2px solid transparent;
        border-radius: 10px;
        color: #FFFFFF;
        margin: 10px;
        padding: 10px;
        cursor: pointer;
        &:hover {
        border-color: #C98CF1;
        }
    }
`

const Tags = () => {
    return (
        <>
            <TagsContainer>
                <TituloTags>Busque por tags:</TituloTags>
                <TagsFiltro>
                    {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
                </TagsFiltro>
            </TagsContainer>
        </>
    )
}

export default Tags