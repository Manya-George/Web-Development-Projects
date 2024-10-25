let plan_generator = document.getElementById('generator');
let nav = document.querySelector('nav');
let tracker_form = document.getElementById('tracker-form');
let days_tracked = document.getElementById('progress-days');
let progress_grid = document.getElementById('progress_grid');
let back_btn = document.getElementById('back');
let doc_body = document.querySelector('body'); 

function box_gen(){
    let box = document.createElement('div');
        box.textContent = `Day ${i}`;
        box.className = "progress_box";
        box.style = "background-color: black; color:white; height: 100px; width: 190px; border-radius: 5px; margin-right: 15px; padding: 4px 0px 0px 4px; cursor: pointer";
        row.appendChild(box);
};

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
            let new_row = document.createElement('div');
            new_row.className = "progress_row2";
            new_row.style = "display: flex; flex-direction: row;"
            progress_grid.appendChild(new_row);
        }
        box_gen();
    }

    progress_grid.appendChild(row);

    // Add the last row if it's not already added
    /*if (row.children.length > 0) {
        progress_grid.appendChild(row);
    }*/
});
