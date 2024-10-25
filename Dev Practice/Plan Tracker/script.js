let plan_generator = document.getElementById('generator');
let nav = document.querySelector('nav');
let tracker_form = document.getElementById('tracker-form');
let days_tracked = document.getElementById('progress-days');
let progress_grid = document.getElementById('progress_grid');
let progress_grid2 = document.getElementById('progress_grid_2');
let back_btn = document.getElementById('back');
let doc_body = document.querySelector('body'); 

plan_generator.addEventListener('click', () => {
    let days = days_tracked.value;
    tracker_form.innerHTML = '';
    /*nav.innerHTML = `<div id="back" style="background: white; color: black; width: 100px; cursor: pointer; border-radius: 10px; box-shadow: 4px 4px;"><img src="arrow-left-short.svg" style="width: 20px;">Back</div>
                     <h1>Progress Tracker</h1>
                    `;*/
    let row = document.createElement('div');
    row.className = "progress_row";
    row.style = "display: flex; flex-direction: row;";

    for (let i = 1; i <= days; i++) {
        if ((i - 1) % 6 === 0 && i !== 1) { // Create a new row every 6 elements
            progress_grid2.appendChild(row);
            row = document.createElement('div');
            row.className = "progress_row";
            row.style = "display: flex; flex-direction: row;";
        }
        let box = document.createElement('div');
        box.textContent = `Day ${i}`;
        box.className = "progress_box";
        box.style = "background-color: black; color:white; height: 100px; width: 190px; border-radius: 5px; margin-right: 15px; padding: 4px 0px 0px 4px; cursor: pointer";
        row.appendChild(box);
    }

    // Add the last row if it's not already added
    if (row.children.length > 0) {
        progress_grid.appendChild(row);
    }
});


back_btn.addEventListener('click',() => {
    doc_body.innerHTML = `<nav>
                            <h1>Progress Tracker</h1>
                          </nav>
                          <div class="tracker-form" id="tracker-form">
                              <h3>How many days do you want to track?</h3>
                              <input type="number" id="progress-days">
                              <button id="generator">Generate Planner</button>
                           </div>
                          <div id="progress_grid">

                          </div>

                          <script src="script.js"></script>`;
});
 
/*function boxRowGenerator(){
    let box_array = [];
    const maxlength = 6;
    let row = document.createElement('div');
    row.className = "box-rows";
    row.style = "display: flex; flex-direction: row; justify-content: space-between;"
    for(i = 1; i <= maxlength; i++){
        let box = document.createElement('div');
        box.textContent = `Day ${i}`;
        box.className = "progress_box";
        box.style = "background-color: black; color:white; height: 100px; width: 190px; border-radius: 5px; margin-right: 15px; padding: 4px 0px 0px 4px; cursor: pointer";
        box_array.push(box);
        //row.appendChild(box_array);
        console.log(box_array);
    }
}*/
