import React, { useState } from "react";
import { Button, Flex, TextArea } from "@fluentui/react-northstar";
import { dialog, UrlDialogInfo } from "@microsoft/teams-js";

export const Home = () => {
    const [value, setValue] = useState<string>();

    const dialogSubmitHandler = (data: dialog.ISdkResponse) => {
        setValue(data.result as string);
    };

    const openDialog = () => {
        const dialogCfg: UrlDialogInfo = {
            size: {
                height: 150,
                width: 400
            },
            url: `${process.env.REACT_APP_BASE_URL}/modal-dialog`
        };
        dialog.url.open(dialogCfg, dialogSubmitHandler)
    };

    return (
        <Flex column gap="gap.large">
            <h1>Dialog test</h1>
            <Button content="Open dialog" onClick={openDialog} />
            <TextArea placeholder="Input from dialog will be displayed here" value={value} disabled />
        </Flex>
    )
}
