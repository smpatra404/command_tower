const hamburgericon_element = document.querySelector('#hamburger-icon');
const crossicon_element = document.querySelector('#cross-icon');
const menupanel_element = document.querySelector('#menu-items');
const leftpane_element = document.querySelector('#leftside-container');
const rightpane_element = document.querySelector('#rightside-container');
const plusicon_element = document.querySelector('#add-icon');
const tabdropdown_element = document.querySelector('#tab-dropdown');
const menuitems_element = document.querySelector('#menu-items');
const tabheaderlist_element = document.querySelector('#tabs-headers');

// adding options to the nav bar menus
let navbaroptions_obj = [
    {
        name: 'Home',
        url: '#',
    },
    {
        name: 'Services',
        url: '#',
    },
    {
        name: 'Contact Us',
        url: '#',
    },
    {
        name: 'Profile',
        url: '#',
    },
    {
        name: 'Sign Out',
        url: '#',
    },
];
navbaroptions_obj.map((option) => {
    let menu_element = document.createElement('a');
    menu_element.setAttribute('href', option.url);
    menu_element.setAttribute('class', 'options');
    menu_element.innerText = option.name;
    menuitems_element.appendChild(menu_element);
});

// adding tabs to the tabs drop down
let tabslist_obj = [
    {
        id: 'ikon',
        content: '<h1>Ikon</h1><p>Hello I am Ikon tool</p>',
    },
    {
        id: 'rooka',
        content: '<h1>Rooka</h1><p>Hello I am Rooka tool</p>',
    },
    {
        id: 'shift',
        content: '<h1>Shift</h1><p>Hello I am Shift tool</p>',
    },
    {
        id: 'talent',
        content: '<h1>Talent</h1><p>Hello I am Talent tool</p>',
    }
]
tabslist_obj.map((tab) => {
    let link_element = document.createElement('a');
    link_element.innerText = tab.id.toUpperCase();
    link_element.setAttribute('id', tab.id.toUpperCase() + '-tab');
    link_element.setAttribute('class', 'dropdownlinks');
    tabdropdown_element.appendChild(link_element);
})

// handling hamburger icon click
hamburgericon_element.addEventListener('click', () => {
    leftpane_element.classList.toggle('hide');
    rightpane_element.classList.toggle('hide');
    menupanel_element.classList.toggle('active');
});

// handling close icon click
crossicon_element.addEventListener('click', () => {
    leftpane_element.classList.remove('hide');
    rightpane_element.classList.remove('hide');
    menupanel_element.classList.remove('active');
});

// handling plus icon click
let clicked_options = 0;
plusicon_element.addEventListener('click', () => {

    // for the last option click, incremanting the value by one to detect no options are left
    if (clicked_options == tabslist_obj.length) {
        clicked_options += 1;
    }

    // if options are available
    else if (clicked_options <= tabslist_obj.length) {
        tabdropdown_element.classList.toggle('active');
    }

    // if no available options are there
    else {
        alert('You have selected all the available options !!!');
    }
})

//closing dropdown after clickin on windows emty space
window.onclick = function (event) {

    // if event element is not the plus icon 
    if (!event.target.matches('#add-icon')) {
        document.querySelector('#tab-dropdown').classList.remove('active'); // Close the dropdown
    }
}

// adding the tab selected from drop down while removing it from dropdown as well 
document.querySelectorAll('.dropdownlinks').forEach(link => {
    link.addEventListener('click', () => {

        // creating the tab that needs to be added
        let tab_el = document.createElement('div');
        tab_el.setAttribute('id', link.textContent.toUpperCase() + '-content');
        tab_el.setAttribute('class', 'tab clicked');
        tab_el.innerText = link.textContent;
        tabheaderlist_element.appendChild(tab_el); // Adding tab to the tabs header list

        // removing highlight of all tabs except the newly selected one
        document.querySelectorAll('.tab').forEach(tab => {
            if (tab.textContent.toLowerCase() != link.textContent.toLowerCase()) {
                tab.classList.remove('clicked');
            }
        });

        // highlighting only selected tab
        link.classList.add('hide');

        // counting selected options
        clicked_options += 1;
    });
});

// removing highlight of all tabs except the newly selected one
console.log(tabheaderlist_element)