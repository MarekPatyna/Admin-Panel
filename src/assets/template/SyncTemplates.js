export const statusTemplate = (props) => {
    if (props.status === "Unconfirmed") {
        return <div style={{color: '#FCAF3F', textTransform: 'uppercase', fontWeight: 500, backgroundColor: '#F3ECE0', padding: '3px', width: '97px'}}>{props.status}</div>
    } if (props.status === "Completed" ) {
        return <div style={{color: '#10B981', textTransform: 'uppercase', fontWeight: 500, backgroundColor: '#DAEFED', padding: '3px', width: '82px'}}>{props.status}</div>
    } if (props.status === "Shipped" ) {
        return <div style={{color: '#0EA5E9', textTransform: 'uppercase', fontWeight: 500, backgroundColor: '#DAEDF8', padding: '3px', width: '60px'}}>{props.status}</div>
    } if (props.status === "Processing" ) {
        return <div style={{color: '#4F46E5', textTransform: 'uppercase', fontWeight: 500, backgroundColor: '#E1E3F8', padding: '3px', width: '85px'}}>{props.status}</div>
    } else {
        return <div style={{color: '#FF5C2B', textTransform: 'uppercase', fontWeight: 500, backgroundColor: '#F3E5E3', padding: '3px', width: '78px'}}>{props.status}</div>
    }
}
export const paymentTemplate = (props) => {
    if (props.payment === "⦾Await") {
        return <div style={{color: '#FCAF3F', textTransform: 'uppercase', fontWeight: 500}}>{props.payment}</div>
    } if (props.payment === "⦾Paid" ) {
        return <div style={{color: '#10B981', textTransform: 'uppercase', fontWeight: 500}}>{props.payment}</div>
    } else {
        return <div style={{color: '#FF5C2B', textTransform: 'uppercase', fontWeight: 500}}>{props.payment}</div>
    }
}

export const gridTemplate = (props) => {
    const src = 'prod/' + props.sr +'.webp';
    return (
        <div>
            <img src={src} alt={props.ProductID}/>
        </div>
    )
}
export const stockTemplate = (props) => {
    if (props.stock === "Low Stock") {
        return <div style={{color: 'blue', textTransform: 'uppercase', fontWeight: 500}}>{props.stock}</div>
    } if (props.stock === "In Stock" ) {
        return <div style={{color: 'green', textTransform: 'uppercase', fontWeight: 500}}>{props.stock}</div>
    } else {
        return <div style={{color: 'red', textTransform: 'uppercase', fontWeight: 500}}>{props.stock}</div>
    }
}

export const ownerData = [
    { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
    { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
    { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
]