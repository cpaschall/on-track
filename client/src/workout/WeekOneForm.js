

const WeekOneForm = () => {


    return (
        <div className="wokoutLogTemplate weekOne">
            <h3>Week 1</h3>
            <form action="./week1.html"> 
                <table>
                    <tr>
                        <th className="logColName">Exercise</th>
                        <th className="logColName">Set</th>
                        <th className="logColName">Weight</th>
                        <th className="logColName">% 1RM</th>
                        <th className="logColName">Rep Goal</th>
                        <th className="logColName">Reps Completed</th>
                    </tr>
                    <tr>
                        <td className="exName">Exercise 1 (Warmup)</td>
                        <td>
                            <table>
                                <tr><td className="set logCell"><label for="w1me1wus1">1</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1wus2">2</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1wus3">3</label></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" min="0" step="5" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="oneRmPrcnt logCell">40%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">50%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">60%</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="repGoal logCell">5</td></tr>
                                <tr><td className="repGoal logCell">5</td></tr>
                                <tr><td className="repGoal logCell">3</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1wus1"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1wus2"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1wus3"/></td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td className="exName">Exercise 1 (Working Set)</td>
                        <td>
                            <table>
                                <tr><td className="set logCell"><label for="w1me1wss1">1</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1wss2">2</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1wss3">3</label></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="oneRmPrcnt logCell">65%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">75%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">85%</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="repGoal logCell">5</td></tr>
                                <tr><td className="repGoal logCell">5</td></tr>
                                <tr><td className="repGoal logCell">5+</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1wss1"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1wss2"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1wss3"/></td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td className="exName">Exercise 2 (BBB)</td>
                        <td>
                            <table>
                                <tr><td className="set logCell"><label for="w1me1bbbs1">1</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1bbbs2">2</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1bbbs3">3</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1bbbs4">4</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1bbbs5">5</label></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="oneRmPrcnt logCell">60%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">55%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">50%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">45%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">40%</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="repGoal logCell">10</td></tr>
                                <tr><td className="repGoal logCell">10</td></tr>
                                <tr><td className="repGoal logCell">10</td></tr>
                                <tr><td className="repGoal logCell">10</td></tr>
                                <tr><td className="repGoal logCell">10</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1bbbs1"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1bbbs2"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1bbbs3"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1bbbs4"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1bbbs5"/></td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td className="exName">Exercise 3 (Accessory 1)</td>
                        <td>
                            <table>
                                <tr><td className="set logCell"><label for="w1me1acc1s1">1</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1acc1s2">2</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1acc1s3">3</label></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="oneRmPrcnt logCell">50%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">60%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">70%</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="repGoal logCell">10</td></tr>
                                <tr><td className="repGoal logCell">10</td></tr>
                                <tr><td className="repGoal logCell">10</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1acc1s1"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1acc1s2"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1acc1s3"/></td></tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td className="exName">Exercise 4 (Accessory 2)</td>
                        <td>
                            <table>
                                <tr><td className="set logCell"><label for="w1me1acc2s1">1</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1acc2s2">2</label></td></tr>
                                <tr><td className="set logCell"><label for="w1me1acc2s3">3</label></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                                <tr><td><input type="number" value="0" className="weight logCell"/></td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="oneRmPrcnt logCell">50%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">60%</td></tr>
                                <tr><td className="oneRmPrcnt logCell">70%</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td className="repGoal logCell">10</td></tr>
                                <tr><td className="repGoal logCell">10</td></tr>
                                <tr><td className="repGoal logCell">10</td></tr>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1acc2s1"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1acc2s2"/></td></tr>
                                <tr><td><input type="number" value="0" className="repCom logCell" id="w1me1acc2s3"/></td></tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default WeekOneForm;