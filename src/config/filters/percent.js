export default _ => !isNaN(_) ? (Number(_) * 100).toFixed(2) + '%' : _
