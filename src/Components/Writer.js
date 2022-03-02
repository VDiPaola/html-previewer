export default function Writer(props){
    return(
        <div className="col-md-6">
            <textarea className="form-control h-100" value={props.html} onChange={(e)=>{props.submitUpdateHtmlAction(e.target.value)}}/>
        </div>
    )
}