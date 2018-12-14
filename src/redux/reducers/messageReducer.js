export default function message (state = '', action) {
    switch (action.type) {
        case 'showSalutation': 
            return 'Hello world!';
        case 'showStatement':
            return 'I am the best.';
        case 'hideMessage': 
            return '';
        default: 
            return state;
    }
}