import { Helmet } from "react-helmet";
import { Text } from "../../components/Text/Text.jsx";

export default function NosavedPage() {
    return (
        <>
            <Helmet>
                <title>criticowl</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full min-h-screen flex flex-col">
                <div className="flex flex-grow justify-center items-center">
                    <Text size="xl" as="p">
                        You haven&apos;t saved anything yet!
                    </Text>
                </div>
            </div>
        </>
    );
}
