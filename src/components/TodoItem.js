export default function TodoItem({ text, id, onDelete}) {


    return (
        <div onClick={() => {
            onDelete(id)
        }}>
            <li>{text}</li>
        </div>
    )
}