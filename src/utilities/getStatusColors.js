import {statusColors} from './../../data.js'


const getStatusColor = (status) => {
    const statusColorString = statusColors.find(color => color.status === status)
    const statusColorNumber = parseInt(statusColorString.color, 16)
    const statusColorHex = '#'+statusColorNumber.toString(16)

    return statusColorHex;
}

export default getStatusColor;

