import React from 'react';
import Header from "../common/Header";
import Footer from "../common/Footer";
import AgileheaderBanner from "../common/AgileheaderBanner";

export default function BodyFaq() {
    return (
        <>
        <AgileheaderBanner />
        <div class="w3aitsfaq">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <div class="container">
                <div class="panel-group w3l_panel_group_faq" id="accordion" role="tablist" aria-multiselectable="true">
                    <FaqItem headingNumber="headingOne1" collapseNumber="collapseOne1" nameItem="assumenda est cliche reprehenderit?"
                            ctrlCollNumber="collapseOne1" collapseNumLink="#collapseOne1" isOpen="true"
                            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." 
                    />
                    <FaqItem headingNumber="headingTwo" collapseNumber="collapseTwo" nameItem="assumenda est cliche reprehenderit?"
                            ctrlCollNumber="collapseTwo" collapseNumLink="#collapseTwo" isOpen="false"
                            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." 
                    />
                    <FaqItem headingNumber="headThree" collapseNumber="collapseThree" nameItem="assumenda est cliche reprehenderit?"
                            ctrlCollNumber="collapseThree" collapseNumLink="#collapseThree" isOpen="false"
                            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." 
                    />
                     <FaqItem headingNumber="headingFour" collapseNumber="collapseFour" nameItem="assumenda est cliche reprehenderit?"
                            ctrlCollNumber="collapseFour" collapseNumLink="#collapseFour" isOpen="false"
                            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." 
                    />
                    <FaqItem headingNumber="headingFive" collapseNumber="collapseFive" nameItem="assumenda est cliche reprehenderit?"
                            ctrlCollNumber="collapseFive" collapseNumLink="#collapseFive" isOpen="false"
                            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." 
                    />
                    <FaqItem headingNumber="headingSix" collapseNumber="collapseSix" nameItem="assumenda est cliche reprehenderit?"
                            ctrlCollNumber="collapseSix" collapseNumLink="#collapseSix" isOpen="false"
                            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." 
                    />
                    <FaqItem headingNumber="headingSeven" collapseNumber="collapseSeven" nameItem="assumenda est cliche reprehenderit?"
                            ctrlCollNumber="collapseSeven" collapseNumLink="#collapseSeven" isOpen="false"
                            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." 
                    />
                    <FaqItem headingNumber="headingEight" collapseNumber="collapseEight" nameItem="assumenda est cliche reprehenderit?"
                            ctrlCollNumber="collapseEight" collapseNumLink="#collapseEight" isOpen="false"
                            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." 
                    />
                    <FaqItem headingNumber="headingNine" collapseNumber="collapseNine" nameItem="assumenda est cliche reprehenderit?"
                            ctrlCollNumber="collapseNine" collapseNumLink="#collapseNine" isOpen="false"
                            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." 
                    />
                </div>
            </div>
        </div>
        </>
    )
}

class FaqItem extends React.Component {
    render() {
        return(
            <>
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id={this.props.headingNumber}>
                    <h4 class="panel-title asd">
                        <a class="pa_italic" role="button" data-toggle="collapse" 
                            data-parent="#accordion" href={this.props.collapseNumLink} aria-expanded={this.props.isOpen} 
                            aria-controls={this.props.ctrlCollNumber}>
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                            <i class="glyphicon glyphicon-minus" aria-hidden="true"></i>{this.props.nameItem}
                        </a>
                    </h4>
                </div>
                <div id={this.props.collapseNumber} class="panel-collapse collapse in" role="tabpanel" aria-labelledby={this.props.headingNumber}>
                    <div class="panel-body panel_text">
                        {this.props.content}
                    </div>
                </div>
            </div>
            </>
        )
    }
}