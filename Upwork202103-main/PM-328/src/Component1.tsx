function Component1(props: any) {
    const [css, setCss] = React.useState("");

    React.useEffect(() => {
        BridgeStyling.loadStyle("./src/Component1.scss").then(css => {
            setCss(css);
        });
    });
    
    if (!css) return null;
    let className = BridgeStyling.useStyle(css);

    return (
        <div className={className}>
            {/* Build component here */}
            {/* You do not have not write React code, normal HTML is also OK */}
            <span>Mileway, Stockholm</span>
            <div className="tabarea">
                <div className="tabs-control">

                    <ul class="nav nav-tabs">
                        <li class="nav-item" ><a class="nav-link" href="#">OVERVIEW</a></li>
                        <li class="nav-item" ><a class="nav-link active" href="#">TODO</a></li>
                        <li class="nav-item" ><a class="nav-link" href="#">TOOLS</a></li>
                        <li class="nav-item" ><a class="nav-link" href="#">DOCUMENTS</a></li>
                        <li class="nav-item" ><a class="nav-link" href="#">RISKS</a></li>
                        <li class="nav-item" ><a class="nav-link" href="#">PROJECT</a></li>
                        <li class="nav-item">
                        <form class="form">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                        </li>
                    </ul>

                </div>
                
                <div className="tab-table">
                    <div className="table-desc">
                        <p>Samtliga delar måste vara uppfyllda innan du kan gå vidare till nästa steg.</p>
                    </div>
                    <div className="table-tile">
                        <h1>Mandatory–</h1>
                    </div>
                    <div className="table-top">
                        <table class="customers">
                            <tr>
                                <th width="30%">Name</th>
                                <th width="20%">Task</th>
                                <th width="15%">Deadline</th>
                                <th width="15%">Status</th>
                                <th width="20%">Assigned to</th>
                            </tr>
                            <tr>
                                <td>Arbetsmijlöplan</td>
                                <td>Upprätta</td>
                                <td>Klart</td>
                                <td> </td>
                                <td>Johan Kvick</td>
                            </tr>
                            <tr>
                                <td>Produktionsplan</td>
                                <td>Upprätta</td>
                                <td> </td>
                                <td> </td>
                                <td>Henric Börgeson</td>
                            </tr>
                            <tr>
                                <td>ADP-plan</td>
                                <td>Upprätta</td>
                                <td></td>
                                <td></td>
                                <td>Rickard Nilsson</td>
                            </tr>
                            <tr>
                                <td>Skyddsrondsprotokoll</td>
                                <td>Upprätta</td>
                                <td></td>
                                <td></td>
                                <td>Johan Kvick</td>
                            </tr>
                            <tr>
                                <td>Riskanalyser</td>
                                <td>Upprätta</td>
                                <td>Inskickad</td>
                                <td></td>
                                <td>Johan Thylin</td>
                            </tr>
                            <tr>
                                <td>KM-plan</td>
                                <td>Upprätta</td>
                                <td>Klar</td>
                                <td></td>
                                <td>Henric Börgeson</td>
                            </tr>
                            <tr>
                                <td>Kontrollplan</td>
                                <td>Upprätta</td>
                                <td></td>
                                <td></td>
                                <td>Johan Kvick</td>
                            </tr>
                        </table>
                    </div>
                    <div className="table-left">
                        <table class="table-color">
                            <tr>
                                <th>Done</th>
                            </tr>
                            <tr>
                                <td class="odd even"></td>
                            </tr>
                            <tr>
                                <td class="odd"></td>
                            </tr>
                            <tr>
                                <td class="odd"></td>
                            </tr>
                            <tr>
                                <td class="odd"></td>
                            </tr>
                            <tr>
                                <td class="odd even"></td>
                            </tr>
                            <tr>
                                <td class="odd even"></td>
                            </tr>
                            <tr>
                                <td class="odd"></td>
                            </tr>
                        </table>
                    </div>
                    <div class="table-button">
                        <div className="table-tile">
                            <h1>Ej obligatoriska–</h1>
                        </div>
                        <div className="table-top">
                            <table class="customers">
                                <tr>
                                    <th width="30%">Name</th>
                                    <th width="20%">Task</th>
                                    <th width="30%">Status</th>
                                    <th width="20%">Assigned to</th>
                                </tr>
                                <tr>
                                    <td>Arbetsmijlöplan</td>
                                    <td>Upprätta</td>
                                    <td>Klart</td>
                                    <td>Johan Kvick</td>
                                </tr>
                                <tr>
                                    <td>Produktionsplan</td>
                                    <td>Upprätta</td>
                                    <td>Ej påbörjad</td>
                                    <td>Henric Börgeson</td>
                                </tr>
                                <tr>
                                    <td>ADP-plan</td>
                                    <td>Upprätta</td>
                                    <td>Ej påbörjad</td>
                                    <td>Rickard Nilsson</td>
                                </tr>
                                <tr>
                                    <td>Skyddsrondsprotokoll</td>
                                    <td>Upprätta</td>
                                    <td>Ej påbörjad</td>
                                    <td>Johan Kvick</td>
                                </tr>
                                
                            </table>
                        </div>
                        <div className="table-left">
                        <table class="table-color">
                            <tr>
                                <th>Done</th>
                            </tr>
                            <tr>
                                <td class="odd even"></td>
                            </tr>
                            <tr>
                                <td class="odd"></td>
                            </tr>
                            <tr>
                                <td class="odd"></td>
                            </tr>
                            <tr>
                                <td class="odd"></td>
                            </tr>
                            
                        </table>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}