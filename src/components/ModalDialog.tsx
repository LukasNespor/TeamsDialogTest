import React, { useState } from "react";
import { Button, Flex, TextArea } from "@fluentui/react-northstar";
import { dialog } from "@microsoft/teams-js";

export const ModalDialog = () => {
    const [value, setValue] = useState<string>();
    
    return (
        <Flex column gap="gap.small">
            <TextArea placeholder="Tell me something" onChange={(_, v) => setValue(v?.value)} />
            <Flex gap="gap.small">
                <Button content="Cancel" onClick={() => dialog.url.submit()} />
                <Button content="Submit" onClick={() => dialog.url.submit(value)} primary />
            </Flex>
        </Flex>
    )
}
