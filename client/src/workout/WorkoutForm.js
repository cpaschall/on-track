import { Link, Outlet } from 'react-router-dom';
import WeekOneForm from './WeekOneForm';
import WeekTwoForm from './WeekTwoForm';
import WeekThreeForm from './WeekThreeForm';
import WeekFourForm from './WeekFourForm';
import './WorkoutForm.css'

const WorkoutForm = () => {

    return (
        <div>
            <h3>Workout Log</h3>
            <div>
                <Link to="/">Home</Link>
                {/* <a href="./index.html"><h4>Home</h4></a> */}
            </div>
            <div class="oneRepMax">
                <table>
                    <tr>
                        <th colSpan="2">Main Lift</th>
                        <th colSpan="2">Accessory 1</th>
                        <th colSpan="2">Accessory 2</th>
                    </tr>
                    <tr>
                        <th>Lift</th>
                        <th>1RM</th>
                        <th>Lift</th>
                        <th>1RM</th>
                        <th>Lift</th>
                        <th>1RM</th>
                    </tr>
                    <tr>
                        <td><label for="ohp">Overhead Press</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="ohp" value="0"/></td>
                        <td><label for="cgbp">Close Grip Bench Press</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="cgbp" value="0"/></td>
                        <td><label for="urRow">Upright Row</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="urRow" value="0"/></td>
                    </tr>
                    <tr>
                        <td><label for="dl">Deadlift</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="dl" value="0"/></td>
                        <td><label for="bntRow">Bent Row</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="bntRow" value="0"/></td>
                        <td><label for="bbCurl">Barbell Curl</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="bbCurl" value="0"/></td>
                    </tr>
                    <tr>
                        <td><label for="bench">Bench Press</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="bench" value="0"/></td>
                        <td><label for="incBench">Incline Bench Press</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="incBench" value="0"/></td>
                        <td><label for="sc">Skullcrusher</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="sc" value="0"/></td>
                    </tr>
                    <tr>
                        <td><label for="squat">Squat</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="squat" value="0"/></td>
                        <td><label for="sldl">Straight-Leg Deadlift</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="sldl" value="0"/></td>
                        <td><label for="rvbc">Reverse Barbell Curl</label></td>
                        <td><input type="number" min="0" step="5" class="oneRmInputs" id="rvbc" value="0"/></td>
                    </tr>
                </table>
            </div>
            <WeekOneForm />
            <WeekTwoForm />
            <WeekThreeForm />
            <WeekFourForm />
            {/* <script src="./script.js"></script> */}
        </div>
    )
}

export default WorkoutForm;