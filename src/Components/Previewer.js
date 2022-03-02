import { marked } from "marked"

export default function Previewer(props){
    return(
        <div className="col-md-6" dangerouslySetInnerHTML={{__html: marked.parse(props.html)}}>
        </div>
    )
}