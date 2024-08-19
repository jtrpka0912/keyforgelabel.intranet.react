import Label from "../label/label";
import Upload from "../upload/upload";
import './page.css';

const Page = () => {
    return (
        <div className="page">
            <div className="page__labels">
                <Label />
            </div>

            <Upload />
        </div>
    );
};

export default Page;