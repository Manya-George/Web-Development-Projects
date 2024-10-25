let generator = document.getElementById('generator');
let nav = document.getElementById('nav');
let progress_form = document.getElementById('progress-form');
let progress_grid = document.getElementById('progress-grid');
let progress_days = document.getElementById('progress-days');

generator.addEventListener('click',() => {
    navModifier();
    boxRowGenerator();
});

function navModifier(){
    progress_form.innerHTML = '';
    nav.innerHTML = `
                        <div class="container-fluid">
                        <a class="navbar-brand" href="#">Back</a>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mt-3">
                            <li class="nav-item">
                                <h1>Progress Tracker</h1>
                            </li>
                            </ul>
                        </div>
                        </div>
                    `;
};

function boxRowGenerator(){
    let days = progress_days.value;
    for(i = 1; i <= days; i++){
        let box = document.createElement('div');
        box.textContent = `Day ${i}`;
        box.className = "progress_box";
        box.style = "background-color: black; color:white; height: 100px; width: 190px; border-radius: 5px; margin-right: 15px; padding: 4px 0px 0px 4px; cursor: pointer";
        progress_grid.appendChild(box);
    }
}