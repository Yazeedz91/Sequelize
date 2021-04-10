window.onload = async function () {
    
    // Create Table

    const table = document.querySelector('#dining_halls');
    
    const request = await fetch('/api/dining');
    const data = await request.json();
    const hall_array = data.data;

    console.log(hall_array);

    hall_array.forEach((element) => {
        const hall_name = element.hall_name;
        const hall_loc = element.hall_address;
        const table_row = document.createElement('tr');
        table_row.classList.add('tr');
        table_row.innerHTML = `
                            <td class="td">${hall_name}</td>
                            <td class="td">${hall_loc}</td>
                        `;
        table.append(table_row);
    });

    Object.keys(data).forEach((element) => {
        Object.keys(element).forEach((hall) => {
        
        });
    });

    // Create Chart

    const req_meals = await fetch('/api/meals')
    const req_macros = await fetch('/api/macros')
    const meals = await req_meals.json()
    const macros = await req_macros.json()

    console.log(meals)
    console.log(macros)
    const [ten_meals, ten_macros] = get_ten_items(meals, macros)

    console.log(ten_meals[0].meal_name)

    console.log(ten_macros[0].calories)

    let chart = new CanvasJS.Chart("chart", {
        animationEnabled: true,
        theme: "light1",
        title:{
            text: "Meals vs Macros"
        },
        data: [{
            type: "stackedBar",
            name: "Calories",
            showInLegend: "true",
            dataPoints: [
                { label: ten_meals[0].meal_name, y: ten_macros[0].calories },
                { label: ten_meals[1].meal_name, y: ten_macros[1].calories },
                { label: ten_meals[2].meal_name, y: ten_macros[2].calories },
                { label: ten_meals[3].meal_name, y: ten_macros[3].calories },
                { label: ten_meals[4].meal_name, y: ten_macros[4].calories },
                { label: ten_meals[5].meal_name, y: ten_macros[5].calories },
                { label: ten_meals[6].meal_name, y: ten_macros[6].calories },
                { label: ten_meals[7].meal_name, y: ten_macros[7].calories },
                { label: ten_meals[8].meal_name, y: ten_macros[8].calories },
                { label: ten_meals[9].meal_name, y: ten_macros[9].calories }
            ]
        },
        {
            type: "stackedBar",
            name: "Serving Size",
            showInLegend: "true",
            dataPoints: [
                { label: ten_meals[0].meal_name, y: ten_macros[0].serving_size },
                { label: ten_meals[1].meal_name, y: ten_macros[1].serving_size },
                { label: ten_meals[2].meal_name, y: ten_macros[2].serving_size },
                { label: ten_meals[3].meal_name, y: ten_macros[3].serving_size },
                { label: ten_meals[4].meal_name, y: ten_macros[4].serving_size },
                { label: ten_meals[5].meal_name, y: ten_macros[5].serving_size },
                { label: ten_meals[6].meal_name, y: ten_macros[6].serving_size },
                { label: ten_meals[7].meal_name, y: ten_macros[7].serving_size },
                { label: ten_meals[8].meal_name, y: ten_macros[8].serving_size },
                { label: ten_meals[9].meal_name, y: ten_macros[9].serving_size }
            ]
        },
        {
            type: "stackedBar",
            name: "Cholesterol",
            showInLegend: "true",
            dataPoints: [
                { label: ten_meals[0].meal_name, y: ten_macros[0].cholesterol },
                { label: ten_meals[1].meal_name, y: ten_macros[1].cholesterol },
                { label: ten_meals[2].meal_name, y: ten_macros[2].cholesterol },
                { label: ten_meals[3].meal_name, y: ten_macros[3].cholesterol },
                { label: ten_meals[4].meal_name, y: ten_macros[4].cholesterol },
                { label: ten_meals[5].meal_name, y: ten_macros[5].cholesterol },
                { label: ten_meals[6].meal_name, y: ten_macros[6].cholesterol },
                { label: ten_meals[7].meal_name, y: ten_macros[7].cholesterol },
                { label: ten_meals[8].meal_name, y: ten_macros[8].cholesterol },
                { label: ten_meals[9].meal_name, y: ten_macros[9].cholesterol }
            ]
        },
        {
            type: "stackedBar",
            name: "Sodium",
            showInLegend: "true",
            dataPoints: [
                { label: ten_meals[0].meal_name, y: ten_macros[0].sodium },
                { label: ten_meals[1].meal_name, y: ten_macros[1].sodium },
                { label: ten_meals[2].meal_name, y: ten_macros[2].sodium },
                { label: ten_meals[3].meal_name, y: ten_macros[3].sodium },
                { label: ten_meals[4].meal_name, y: ten_macros[4].sodium },
                { label: ten_meals[5].meal_name, y: ten_macros[5].sodium },
                { label: ten_meals[6].meal_name, y: ten_macros[6].sodium },
                { label: ten_meals[7].meal_name, y: ten_macros[7].sodium },
                { label: ten_meals[8].meal_name, y: ten_macros[8].sodium },
                { label: ten_meals[9].meal_name, y: ten_macros[9].sodium }
            ]
        },
        {
            type: "stackedBar",
            name: "Carbs",
            showInLegend: "true",
            dataPoints: [
                { label: ten_meals[0].meal_name, y: ten_macros[0].carbs },
                { label: ten_meals[1].meal_name, y: ten_macros[1].carbs },
                { label: ten_meals[2].meal_name, y: ten_macros[2].carbs },
                { label: ten_meals[3].meal_name, y: ten_macros[3].carbs },
                { label: ten_meals[4].meal_name, y: ten_macros[4].carbs },
                { label: ten_meals[5].meal_name, y: ten_macros[5].carbs },
                { label: ten_meals[6].meal_name, y: ten_macros[6].carbs },
                { label: ten_meals[7].meal_name, y: ten_macros[7].carbs },
                { label: ten_meals[8].meal_name, y: ten_macros[8].carbs },
                { label: ten_meals[9].meal_name, y: ten_macros[9].carbs }
            ]
        },
        {
            type: "stackedBar",
            name: "Protein",
            showInLegend: "true",
            dataPoints: [
                { label: ten_meals[0].meal_name, y: ten_macros[0].protein },
                { label: ten_meals[1].meal_name, y: ten_macros[1].protein },
                { label: ten_meals[2].meal_name, y: ten_macros[2].protein },
                { label: ten_meals[3].meal_name, y: ten_macros[3].protein },
                { label: ten_meals[4].meal_name, y: ten_macros[4].protein },
                { label: ten_meals[5].meal_name, y: ten_macros[5].protein },
                { label: ten_meals[6].meal_name, y: ten_macros[6].protein },
                { label: ten_meals[7].meal_name, y: ten_macros[7].protein },
                { label: ten_meals[8].meal_name, y: ten_macros[8].protein },
                { label: ten_meals[9].meal_name, y: ten_macros[9].protein }
            ]
        },
        {
            type: "stackedBar",
            name: "Fat",
            showInLegend: "true",
            dataPoints: [
                { label: ten_meals[0].meal_name, y: ten_macros[0].fat },
                { label: ten_meals[1].meal_name, y: ten_macros[1].fat },
                { label: ten_meals[2].meal_name, y: ten_macros[2].fat },
                { label: ten_meals[3].meal_name, y: ten_macros[3].fat },
                { label: ten_meals[4].meal_name, y: ten_macros[4].fat },
                { label: ten_meals[5].meal_name, y: ten_macros[5].fat },
                { label: ten_meals[6].meal_name, y: ten_macros[6].fat },
                { label: ten_meals[7].meal_name, y: ten_macros[7].fat },
                { label: ten_meals[8].meal_name, y: ten_macros[8].fat },
                { label: ten_meals[9].meal_name, y: ten_macros[9].fat }
            ]
        }]
    });
    chart.render();
    
}

function get_ten_items(meals_array, macros_array){
    ten_meals = []
    ten_macros = []

    while (ten_meals.length < 10) {
        rand_int = (Math.floor(Math.random() * meals_array.length)) % meals_array.length;
        if (ten_meals.includes(meals_array[rand_int])){
            continue;
        }
        ten_meals.push(meals_array[rand_int])
        ten_macros.push(macros_array[rand_int])
    }
    return [ten_meals, ten_macros];
}