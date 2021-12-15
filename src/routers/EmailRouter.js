import React from "react";
import { Switch, Route } from "react-router-dom";
import EmailInbox from "../components/email/email_inbox/EmailInbox";
import EmailContent from "../components/email/email_list_item/emailcontent/EmailContent";
import SendEmail from "../components/email/send_email/SendEmail";

export default function EmailRouter() {
    return (
        <Switch>
            <Route exact path="/email/inbox/" render={() => <EmailInbox typeInbox="to"></EmailInbox>} />
            <Route exact path="/email/inbox/:id" render={() => <EmailContent></EmailContent>} />
            <Route exact path="/email/sent/" render={() => <EmailInbox typeInbox="from"></EmailInbox>} />
            <Route exact path="/email/sent/:id" render={() => <EmailContent></EmailContent>} />
            <Route exact path="/email/create/" render={() => <SendEmail></SendEmail>} />
        </Switch>
    );
}
