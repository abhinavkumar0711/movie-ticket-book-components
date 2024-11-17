const Text = ({ type, content, customClass }) => {

    const getTextStyles = () => {
        switch (type) {
            case 'heading':
                return 'text-lg font-semibold text-white';
            case 'heading-large':
                return 'text-2xl font-bold text-white';
            case 'label':
                return 'text-xs text-gray-400';
            case 'label-bold': 
                return `text-white font-bold text-xs shadow-lg`
            case 'paragraph':
                return 'text-base text-white';
            case 'price-large':
                return 'text-6xl font-bold text-green-400 shadow-lg';
            case 'price-medium':
                return 'text-4xl font-bold text-green-400 shadow-lg';
            case 'custom': 
                return ``
            default:
                return 'text-base text-white';
        }
    };
    return (
        <span className={`${getTextStyles()} ${customClass}`}>
            {content}
        </span>
    );
};

export default Text;
