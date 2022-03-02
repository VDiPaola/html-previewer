import Writer from './Writer'
import Previewer from './Previewer'

export default function App(props) {
    return (
        <div className="container-fluid vh-100 vw-100 m-0 p-0">
            <div className='row h-100 mw-100 mh-100'>
                <Writer html={props.html} submitUpdateHtmlAction={props.submitUpdateHtmlAction}/>
                <Previewer html={props.html}/>
            </div>
        </div>
    )
}