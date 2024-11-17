import Button from "../Button/Button";
const FeatureInProgress = ({onBackClick}) => {

    return <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-y-5">
            <span className="text-4xl text-white block">
                Coming Soon
            </span>
            <Button type='primary' text='Go to Home Page' onClick={onBackClick} />
        </div>
    </div>
}

export default FeatureInProgress;