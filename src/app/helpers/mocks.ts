export const recipes = [
  {
    recipe: {
      uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_1b6dfeaf0988f96b187c7c9bb69a14fa',
      label: 'Pizza Dough',
      image:
        'https://edamam-product-images.s3.amazonaws.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJGMEQCIFEx1fkFkq3NogISxodKx6hy%2FuguUQsG9IJ84zolnNx8AiBwGS3KZP6ny5YR5qUisB8ln66w4MSI61LQLCZAakIKrCq5BQgrEAAaDDE4NzAxNzE1MDk4NiIMZr12k%2F05wEv7xo52KpYF7JzDW6mQ8cXJv%2FG6eYcv8hMfuCv2%2FJkhdoTT1ZNvjJElQrd3fRiXbvU0zK4m9oaCEDHZIDFBuvU3Ka65rxHX8X6rIdI1Eakm7GPxyQgyl%2FbDWpPe1dMVsPiJb29noGQpOCdQ9RrHZLoV6mmNsmd9StzUyBWrvdYnquV9yH%2B0bH2DbrEsp5DT6A1%2BVzx3PQ8wuZQBWK9Eulq20HSxt3%2BrIi6l5ErMXlXXGeaDKWu%2BSqT3RrOlZE21yruvpDBtDBW23GzwE%2BSxieSCkbhtKk8VAhHBgg5kKOTKoVuXUIS6HnAWgVsxw3uZvE9kn1cvRjWYg784b5uBi7Okf%2B2Oi3a51FH7mb5LHojqsNeqt4by5nVX7ADWBfagsNh3X1%2Bw2e%2BxHRb60F5QSwPqCsU6g3k3ubO1f1EJzP0UuOwgEVujtiXfY1TqIOwyEEsMFYWaq3k8Kce394cADam1A6bOAlozhH18iUWuEszbfzD1NWVZXZVAc2hE%2BkB3vl%2Bbjn1bzwKttUM%2Fpwav%2BKD1k6RIG7JODFWcAoBQgInj7Ax0qahHl6%2FmB%2B1eo6mlb2dVumzQZTDzKQe1xSZmWvO1flCNj%2FxO18hM3DndjKaDPUbjW%2B7S15tnF%2F2MdYFrMLM98X7dxfk0DsqdGbARueWcf6%2Bt5UINJOSJExcxDlfN6Eo%2B2noyLMIAqr5GsNh%2B7mR9%2F%2BNwdzuILMpUVskVVkAsLaQnYwPcscE4kJ3omsTjmngc1ibBIa2WF8JC3x7zpJM%2FLhqVA8Rft7JwW7RSIoSDY0w6sJraJBVSis%2FOnICjjCwJSYosBhWWbnt9Cm28OdU4LtJiIT2bnyIwPK%2FApYhUQZlxQSkvLUaX%2Bl1ZGXpywP3tR%2B3X6xFAR2b1%2B9owg4%2FvoQY6sgGvabFzXgcsgO43CFEWhhhrPa6RADBMXKAyK40of9zK28vhg4OI1lRuqbCuW%2BZ44UGXHkrArP%2Ffl7QA4Lo9oLDnuT4u51YBvVq84XC04FmJWxIhEOQzIWYiiIR41tANt0%2B6VojC82X6lPnVYOQ8KW%2F0M401kxmwxoRdR3mtlmrXiWjLFNFFko1ksdhpaoecP7yRxHtWGm0xnflJ6EOAT0AS8ABkRCx%2Breo30cqYBI7M%2FMbn&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230416T103749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF5F5RLR3%2F20230416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d826b16ffafb74beb7e1aa4d1e0af8133f12ca4a4b2a0947cae455dfee8e1fb',
      images: {
        THUMBNAIL: {
          url: 'https://edamam-product-images.s3.amazonaws.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJGMEQCIFEx1fkFkq3NogISxodKx6hy%2FuguUQsG9IJ84zolnNx8AiBwGS3KZP6ny5YR5qUisB8ln66w4MSI61LQLCZAakIKrCq5BQgrEAAaDDE4NzAxNzE1MDk4NiIMZr12k%2F05wEv7xo52KpYF7JzDW6mQ8cXJv%2FG6eYcv8hMfuCv2%2FJkhdoTT1ZNvjJElQrd3fRiXbvU0zK4m9oaCEDHZIDFBuvU3Ka65rxHX8X6rIdI1Eakm7GPxyQgyl%2FbDWpPe1dMVsPiJb29noGQpOCdQ9RrHZLoV6mmNsmd9StzUyBWrvdYnquV9yH%2B0bH2DbrEsp5DT6A1%2BVzx3PQ8wuZQBWK9Eulq20HSxt3%2BrIi6l5ErMXlXXGeaDKWu%2BSqT3RrOlZE21yruvpDBtDBW23GzwE%2BSxieSCkbhtKk8VAhHBgg5kKOTKoVuXUIS6HnAWgVsxw3uZvE9kn1cvRjWYg784b5uBi7Okf%2B2Oi3a51FH7mb5LHojqsNeqt4by5nVX7ADWBfagsNh3X1%2Bw2e%2BxHRb60F5QSwPqCsU6g3k3ubO1f1EJzP0UuOwgEVujtiXfY1TqIOwyEEsMFYWaq3k8Kce394cADam1A6bOAlozhH18iUWuEszbfzD1NWVZXZVAc2hE%2BkB3vl%2Bbjn1bzwKttUM%2Fpwav%2BKD1k6RIG7JODFWcAoBQgInj7Ax0qahHl6%2FmB%2B1eo6mlb2dVumzQZTDzKQe1xSZmWvO1flCNj%2FxO18hM3DndjKaDPUbjW%2B7S15tnF%2F2MdYFrMLM98X7dxfk0DsqdGbARueWcf6%2Bt5UINJOSJExcxDlfN6Eo%2B2noyLMIAqr5GsNh%2B7mR9%2F%2BNwdzuILMpUVskVVkAsLaQnYwPcscE4kJ3omsTjmngc1ibBIa2WF8JC3x7zpJM%2FLhqVA8Rft7JwW7RSIoSDY0w6sJraJBVSis%2FOnICjjCwJSYosBhWWbnt9Cm28OdU4LtJiIT2bnyIwPK%2FApYhUQZlxQSkvLUaX%2Bl1ZGXpywP3tR%2B3X6xFAR2b1%2B9owg4%2FvoQY6sgGvabFzXgcsgO43CFEWhhhrPa6RADBMXKAyK40of9zK28vhg4OI1lRuqbCuW%2BZ44UGXHkrArP%2Ffl7QA4Lo9oLDnuT4u51YBvVq84XC04FmJWxIhEOQzIWYiiIR41tANt0%2B6VojC82X6lPnVYOQ8KW%2F0M401kxmwxoRdR3mtlmrXiWjLFNFFko1ksdhpaoecP7yRxHtWGm0xnflJ6EOAT0AS8ABkRCx%2Breo30cqYBI7M%2FMbn&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230416T103749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF5F5RLR3%2F20230416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b65854b2a97c13f1ded29e4ebb11312c32da730687ad787f827a6d0a148a7c76',
          width: 100,
          height: 100,
        },
        SMALL: {
          url: 'https://edamam-product-images.s3.amazonaws.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJGMEQCIFEx1fkFkq3NogISxodKx6hy%2FuguUQsG9IJ84zolnNx8AiBwGS3KZP6ny5YR5qUisB8ln66w4MSI61LQLCZAakIKrCq5BQgrEAAaDDE4NzAxNzE1MDk4NiIMZr12k%2F05wEv7xo52KpYF7JzDW6mQ8cXJv%2FG6eYcv8hMfuCv2%2FJkhdoTT1ZNvjJElQrd3fRiXbvU0zK4m9oaCEDHZIDFBuvU3Ka65rxHX8X6rIdI1Eakm7GPxyQgyl%2FbDWpPe1dMVsPiJb29noGQpOCdQ9RrHZLoV6mmNsmd9StzUyBWrvdYnquV9yH%2B0bH2DbrEsp5DT6A1%2BVzx3PQ8wuZQBWK9Eulq20HSxt3%2BrIi6l5ErMXlXXGeaDKWu%2BSqT3RrOlZE21yruvpDBtDBW23GzwE%2BSxieSCkbhtKk8VAhHBgg5kKOTKoVuXUIS6HnAWgVsxw3uZvE9kn1cvRjWYg784b5uBi7Okf%2B2Oi3a51FH7mb5LHojqsNeqt4by5nVX7ADWBfagsNh3X1%2Bw2e%2BxHRb60F5QSwPqCsU6g3k3ubO1f1EJzP0UuOwgEVujtiXfY1TqIOwyEEsMFYWaq3k8Kce394cADam1A6bOAlozhH18iUWuEszbfzD1NWVZXZVAc2hE%2BkB3vl%2Bbjn1bzwKttUM%2Fpwav%2BKD1k6RIG7JODFWcAoBQgInj7Ax0qahHl6%2FmB%2B1eo6mlb2dVumzQZTDzKQe1xSZmWvO1flCNj%2FxO18hM3DndjKaDPUbjW%2B7S15tnF%2F2MdYFrMLM98X7dxfk0DsqdGbARueWcf6%2Bt5UINJOSJExcxDlfN6Eo%2B2noyLMIAqr5GsNh%2B7mR9%2F%2BNwdzuILMpUVskVVkAsLaQnYwPcscE4kJ3omsTjmngc1ibBIa2WF8JC3x7zpJM%2FLhqVA8Rft7JwW7RSIoSDY0w6sJraJBVSis%2FOnICjjCwJSYosBhWWbnt9Cm28OdU4LtJiIT2bnyIwPK%2FApYhUQZlxQSkvLUaX%2Bl1ZGXpywP3tR%2B3X6xFAR2b1%2B9owg4%2FvoQY6sgGvabFzXgcsgO43CFEWhhhrPa6RADBMXKAyK40of9zK28vhg4OI1lRuqbCuW%2BZ44UGXHkrArP%2Ffl7QA4Lo9oLDnuT4u51YBvVq84XC04FmJWxIhEOQzIWYiiIR41tANt0%2B6VojC82X6lPnVYOQ8KW%2F0M401kxmwxoRdR3mtlmrXiWjLFNFFko1ksdhpaoecP7yRxHtWGm0xnflJ6EOAT0AS8ABkRCx%2Breo30cqYBI7M%2FMbn&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230416T103749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF5F5RLR3%2F20230416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=092c299d52d7519d9307da89b1b6771be24eeb9b3676b30f058483a395afb20d',
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: 'https://edamam-product-images.s3.amazonaws.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJGMEQCIFEx1fkFkq3NogISxodKx6hy%2FuguUQsG9IJ84zolnNx8AiBwGS3KZP6ny5YR5qUisB8ln66w4MSI61LQLCZAakIKrCq5BQgrEAAaDDE4NzAxNzE1MDk4NiIMZr12k%2F05wEv7xo52KpYF7JzDW6mQ8cXJv%2FG6eYcv8hMfuCv2%2FJkhdoTT1ZNvjJElQrd3fRiXbvU0zK4m9oaCEDHZIDFBuvU3Ka65rxHX8X6rIdI1Eakm7GPxyQgyl%2FbDWpPe1dMVsPiJb29noGQpOCdQ9RrHZLoV6mmNsmd9StzUyBWrvdYnquV9yH%2B0bH2DbrEsp5DT6A1%2BVzx3PQ8wuZQBWK9Eulq20HSxt3%2BrIi6l5ErMXlXXGeaDKWu%2BSqT3RrOlZE21yruvpDBtDBW23GzwE%2BSxieSCkbhtKk8VAhHBgg5kKOTKoVuXUIS6HnAWgVsxw3uZvE9kn1cvRjWYg784b5uBi7Okf%2B2Oi3a51FH7mb5LHojqsNeqt4by5nVX7ADWBfagsNh3X1%2Bw2e%2BxHRb60F5QSwPqCsU6g3k3ubO1f1EJzP0UuOwgEVujtiXfY1TqIOwyEEsMFYWaq3k8Kce394cADam1A6bOAlozhH18iUWuEszbfzD1NWVZXZVAc2hE%2BkB3vl%2Bbjn1bzwKttUM%2Fpwav%2BKD1k6RIG7JODFWcAoBQgInj7Ax0qahHl6%2FmB%2B1eo6mlb2dVumzQZTDzKQe1xSZmWvO1flCNj%2FxO18hM3DndjKaDPUbjW%2B7S15tnF%2F2MdYFrMLM98X7dxfk0DsqdGbARueWcf6%2Bt5UINJOSJExcxDlfN6Eo%2B2noyLMIAqr5GsNh%2B7mR9%2F%2BNwdzuILMpUVskVVkAsLaQnYwPcscE4kJ3omsTjmngc1ibBIa2WF8JC3x7zpJM%2FLhqVA8Rft7JwW7RSIoSDY0w6sJraJBVSis%2FOnICjjCwJSYosBhWWbnt9Cm28OdU4LtJiIT2bnyIwPK%2FApYhUQZlxQSkvLUaX%2Bl1ZGXpywP3tR%2B3X6xFAR2b1%2B9owg4%2FvoQY6sgGvabFzXgcsgO43CFEWhhhrPa6RADBMXKAyK40of9zK28vhg4OI1lRuqbCuW%2BZ44UGXHkrArP%2Ffl7QA4Lo9oLDnuT4u51YBvVq84XC04FmJWxIhEOQzIWYiiIR41tANt0%2B6VojC82X6lPnVYOQ8KW%2F0M401kxmwxoRdR3mtlmrXiWjLFNFFko1ksdhpaoecP7yRxHtWGm0xnflJ6EOAT0AS8ABkRCx%2Breo30cqYBI7M%2FMbn&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230416T103749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF5F5RLR3%2F20230416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d826b16ffafb74beb7e1aa4d1e0af8133f12ca4a4b2a0947cae455dfee8e1fb',
          width: 300,
          height: 300,
        },
        LARGE: {
          url: 'https://edamam-product-images.s3.amazonaws.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJGMEQCIFEx1fkFkq3NogISxodKx6hy%2FuguUQsG9IJ84zolnNx8AiBwGS3KZP6ny5YR5qUisB8ln66w4MSI61LQLCZAakIKrCq5BQgrEAAaDDE4NzAxNzE1MDk4NiIMZr12k%2F05wEv7xo52KpYF7JzDW6mQ8cXJv%2FG6eYcv8hMfuCv2%2FJkhdoTT1ZNvjJElQrd3fRiXbvU0zK4m9oaCEDHZIDFBuvU3Ka65rxHX8X6rIdI1Eakm7GPxyQgyl%2FbDWpPe1dMVsPiJb29noGQpOCdQ9RrHZLoV6mmNsmd9StzUyBWrvdYnquV9yH%2B0bH2DbrEsp5DT6A1%2BVzx3PQ8wuZQBWK9Eulq20HSxt3%2BrIi6l5ErMXlXXGeaDKWu%2BSqT3RrOlZE21yruvpDBtDBW23GzwE%2BSxieSCkbhtKk8VAhHBgg5kKOTKoVuXUIS6HnAWgVsxw3uZvE9kn1cvRjWYg784b5uBi7Okf%2B2Oi3a51FH7mb5LHojqsNeqt4by5nVX7ADWBfagsNh3X1%2Bw2e%2BxHRb60F5QSwPqCsU6g3k3ubO1f1EJzP0UuOwgEVujtiXfY1TqIOwyEEsMFYWaq3k8Kce394cADam1A6bOAlozhH18iUWuEszbfzD1NWVZXZVAc2hE%2BkB3vl%2Bbjn1bzwKttUM%2Fpwav%2BKD1k6RIG7JODFWcAoBQgInj7Ax0qahHl6%2FmB%2B1eo6mlb2dVumzQZTDzKQe1xSZmWvO1flCNj%2FxO18hM3DndjKaDPUbjW%2B7S15tnF%2F2MdYFrMLM98X7dxfk0DsqdGbARueWcf6%2Bt5UINJOSJExcxDlfN6Eo%2B2noyLMIAqr5GsNh%2B7mR9%2F%2BNwdzuILMpUVskVVkAsLaQnYwPcscE4kJ3omsTjmngc1ibBIa2WF8JC3x7zpJM%2FLhqVA8Rft7JwW7RSIoSDY0w6sJraJBVSis%2FOnICjjCwJSYosBhWWbnt9Cm28OdU4LtJiIT2bnyIwPK%2FApYhUQZlxQSkvLUaX%2Bl1ZGXpywP3tR%2B3X6xFAR2b1%2B9owg4%2FvoQY6sgGvabFzXgcsgO43CFEWhhhrPa6RADBMXKAyK40of9zK28vhg4OI1lRuqbCuW%2BZ44UGXHkrArP%2Ffl7QA4Lo9oLDnuT4u51YBvVq84XC04FmJWxIhEOQzIWYiiIR41tANt0%2B6VojC82X6lPnVYOQ8KW%2F0M401kxmwxoRdR3mtlmrXiWjLFNFFko1ksdhpaoecP7yRxHtWGm0xnflJ6EOAT0AS8ABkRCx%2Breo30cqYBI7M%2FMbn&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230416T103749Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF5F5RLR3%2F20230416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=84f08539dee21c04f973656a4cc681577fd6110400265802cbbb46731953830a',
          width: 600,
          height: 600,
        },
      },
      source: 'Lottie + Doof',
      url: 'http://www.lottieanddoof.com/2010/01/pizza-pulp-fiction-jim-lahey/',
      shareAs:
        'http://www.edamam.com/recipe/pizza-dough-1b6dfeaf0988f96b187c7c9bb69a14fa/pizza',
      yield: 4,
      dietLabels: ['High-Fiber'],
      healthLabels: [
        'Vegetarian',
        'Pescatarian',
        'Egg-Free',
        'Peanut-Free',
        'Tree-Nut-Free',
        'Soy-Free',
        'Fish-Free',
        'Shellfish-Free',
        'Pork-Free',
        'Red-Meat-Free',
        'Crustacean-Free',
        'Celery-Free',
        'Mustard-Free',
        'Sesame-Free',
        'Lupine-Free',
        'Mollusk-Free',
        'Alcohol-Free',
        'Kosher',
      ],
      cautions: [],
      ingredientLines: [
        '500 g bread flour(3 3/4 cups)',
        '2 1/2 tsp Dry Yeast instant or active (10 grams)',
        '3/4 tsp Table Salt(5 grams)',
        '3/4 tsp Sugar, plus a pinch (about 3 grams)',
        '1 1/2 cup water at room temperature',
        'extra-virgin olive oil for pans',
        '2 x yellow onions(medium), finely chopped (pizza cipolla)',
        '1/3 cup Heavy Cream(pizza cipolla)',
        '1 tsp Kosher Salt(pizza cipolla)',
        '2 tsp fresh thyme, coarsely chopped(pizza cipolla)',
        '7 oz diced tomatoes, drained(pizza pomodoro)',
        '3/4 cup Canned Tomatoes (reserved juice) (pizza pomodoro)',
        '2 tsp Extra Virgin Olive Oil(pizza pomodoro)',
        '1/2 tsp Kosher Salt(pizza pomodoro)',
        '1 pinch Red Pepper Flakes(pizza pomodoro)',
        '8 x fresh basil (large leaves), chopped(pizza pomodoro)',
      ],
      ingredients: [
        {
          text: '500 g bread flour(3 3/4 cups)',
          quantity: 3.75,
          measure: 'cup',
          food: 'bread flour',
          weight: 513.75,
          foodCategory: 'grains',
          foodId: 'food_b5xk0gwa3clakbaap10sta82dgdk',
          image:
            'https://www.edamam.com/food-img/132/1328fd505cdd3b75fbb8d7b58de5427c.jpg',
        },
        {
          text: '2 1/2 tsp Dry Yeast instant or active (10 grams)',
          quantity: 10,
          measure: 'gram',
          food: 'Yeast',
          weight: 10,
          foodCategory: 'condiments and sauces',
          foodId: 'food_a2xisx4br72i19btvvxgzayoelqj',
          image:
            'https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg',
        },
        {
          text: '3/4 tsp Table Salt(5 grams)',
          quantity: 5,
          measure: 'gram',
          food: 'Table Salt',
          weight: 5,
          foodCategory: 'Condiments and sauces',
          foodId: 'food_btxz81db72hwbra2pncvebzzzum9',
          image:
            'https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg',
        },
        {
          text: '3/4 tsp Sugar, plus a pinch (about 3 grams)',
          quantity: 0.75,
          measure: 'teaspoon',
          food: 'Sugar',
          weight: 3.1500000000000004,
          foodCategory: 'sugars',
          foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
          image:
            'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg',
        },
        {
          text: '3/4 tsp Sugar, plus a pinch (about 3 grams)',
          quantity: 3,
          measure: 'gram',
          food: 'Sugar',
          weight: 3,
          foodCategory: 'sugars',
          foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
          image:
            'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg',
        },
        {
          text: '1 1/2 cup water at room temperature',
          quantity: 1.5,
          measure: 'cup',
          food: 'water',
          weight: 355.5,
          foodCategory: 'water',
          foodId: 'food_a99vzubbk1ayrsad318rvbzr3dh0',
          image:
            'https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg',
        },
        {
          text: 'extra-virgin olive oil for pans',
          quantity: 0,
          measure: null,
          food: 'extra-virgin olive oil',
          weight: 21.98758814317252,
          foodCategory: 'Oils',
          foodId: 'food_b1d1icuad3iktrbqby0hiagafaz7',
          image:
            'https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg',
        },
        {
          text: '2 x yellow onions(medium), finely chopped (pizza cipolla)',
          quantity: 2,
          measure: '<unit>',
          food: 'yellow onions',
          weight: 250,
          foodCategory: 'vegetables',
          foodId: 'food_bmrvi4ob4binw9a5m7l07amlfcoy',
          image:
            'https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg',
        },
        {
          text: '1/3 cup Heavy Cream(pizza cipolla)',
          quantity: 0.3333333333333333,
          measure: 'cup',
          food: 'Heavy Cream',
          weight: 79.33333333333333,
          foodCategory: 'Dairy',
          foodId: 'food_bgtkr21b5v16mca246x9ebnaswyo',
          image:
            'https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg',
        },
        {
          text: '1 tsp Kosher Salt(pizza cipolla)',
          quantity: 1,
          measure: 'teaspoon',
          food: 'Kosher Salt',
          weight: 4.854166666912875,
          foodCategory: 'Condiments and sauces',
          foodId: 'food_a1vgrj1bs8rd1majvmd9ubz8ttkg',
          image:
            'https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg',
        },
        {
          text: '2 tsp fresh thyme, coarsely chopped(pizza cipolla)',
          quantity: 2,
          measure: 'teaspoon',
          food: 'fresh thyme',
          weight: 1.6,
          foodCategory: 'Condiments and sauces',
          foodId: 'food_b3o3cj7a5gskecb0ufphtadnbfqb',
          image:
            'https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg',
        },
        {
          text: '7 oz diced tomatoes, drained(pizza pomodoro)',
          quantity: 7,
          measure: 'ounce',
          food: 'diced tomatoes',
          weight: 198.44666187500002,
          foodCategory: 'canned vegetables',
          foodId: 'food_bnmkkwqa9h2p87bz171eoby0bsey',
          image:
            'https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg',
        },
        {
          text: '3/4 cup Canned Tomatoes (reserved juice) (pizza pomodoro)',
          quantity: 0.75,
          measure: 'cup',
          food: 'Canned Tomatoes',
          weight: 180,
          foodCategory: 'canned vegetables',
          foodId: 'food_bnmkkwqa9h2p87bz171eoby0bsey',
          image:
            'https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg',
        },
        {
          text: '2 tsp Extra Virgin Olive Oil(pizza pomodoro)',
          quantity: 2,
          measure: 'teaspoon',
          food: 'Extra Virgin Olive Oil',
          weight: 9,
          foodCategory: 'Oils',
          foodId: 'food_b1d1icuad3iktrbqby0hiagafaz7',
          image:
            'https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg',
        },
        {
          text: '1/2 tsp Kosher Salt(pizza pomodoro)',
          quantity: 0.5,
          measure: 'teaspoon',
          food: 'Kosher Salt',
          weight: 2.4270833334564377,
          foodCategory: 'Condiments and sauces',
          foodId: 'food_a1vgrj1bs8rd1majvmd9ubz8ttkg',
          image:
            'https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg',
        },
        {
          text: '1 pinch Red Pepper Flakes(pizza pomodoro)',
          quantity: 1,
          measure: 'pinch',
          food: 'Red Pepper Flakes',
          weight: 0.04817708339442312,
          foodCategory: 'vegetables',
          foodId: 'food_bispmxiaijcuxcagex14mbhk2o48',
          image:
            'https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg',
        },
        {
          text: '8 x fresh basil (large leaves), chopped(pizza pomodoro)',
          quantity: 1,
          measure: 'leaf',
          food: 'fresh basil',
          weight: 0.625,
          foodCategory: 'Condiments and sauces',
          foodId: 'food_bfeht3obd58c3gak5ehpibxgbbs6',
          image:
            'https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg',
        },
      ],
      calories: 2620.983838835843,
      totalWeight: 1634.8942798085639,
      totalTime: 0,
      cuisineType: ['italian'],
      mealType: ['lunch/dinner'],
      dishType: ['main course'],
      totalNutrients: {
        ENERC_KCAL: {
          label: 'Energy',
          quantity: 2620.983838835843,
          unit: 'kcal',
        },
        FAT: {
          label: 'Fat',
          quantity: 70.85852721973856,
          unit: 'g',
        },
        FASAT: {
          label: 'Saturated',
          quantity: 24.146169048868092,
          unit: 'g',
        },
        FATRN: {
          label: 'Trans',
          quantity: 0,
          unit: 'g',
        },
        FAMS: {
          label: 'Monounsaturated',
          quantity: 32.422316318640384,
          unit: 'g',
        },
        FAPU: {
          label: 'Polyunsaturated',
          quantity: 8.52380890119751,
          unit: 'g',
        },
        CHOCDF: {
          label: 'Carbs',
          quantity: 422.0246006775219,
          unit: 'g',
        },
        'CHOCDF.net': {
          label: 'Carbohydrates (net)',
          quantity: 395.3198872789627,
          unit: 'g',
        },
        FIBTG: {
          label: 'Fiber',
          quantity: 26.7047133985592,
          unit: 'g',
        },
        SUGAR: {
          label: 'Sugars',
          quantity: 30.215096388254253,
          unit: 'g',
        },
        'SUGAR.added': {
          label: 'Sugars, added',
          quantity: 6.137700000000001,
          unit: 'g',
        },
        PROCNT: {
          label: 'Protein',
          quantity: 73.06396909756897,
          unit: 'g',
        },
        CHOLE: {
          label: 'Cholesterol',
          quantity: 108.68666666666667,
          unit: 'mg',
        },
        NA: {
          label: 'Sodium',
          quantity: 3782.255459576151,
          unit: 'mg',
        },
        CA: {
          label: 'Calcium',
          quantity: 334.29146530405507,
          unit: 'mg',
        },
        MG: {
          label: 'Magnesium',
          quantity: 208.73343054795708,
          unit: 'mg',
        },
        K: {
          label: 'Potassium',
          quantity: 1769.5171930720503,
          unit: 'mg',
        },
        FE: {
          label: 'Iron',
          quantity: 26.07861297605938,
          unit: 'mg',
        },
        ZN: {
          label: 'Zinc',
          quantity: 6.299787586540953,
          unit: 'mg',
        },
        P: {
          label: 'Phosphorus',
          quantity: 750.0567007480139,
          unit: 'mg',
        },
        VITA_RAE: {
          label: 'Vitamin A',
          quantity: 407.25119695914213,
          unit: 'µg',
        },
        VITC: {
          label: 'Vitamin C',
          quantity: 69.33900700043584,
          unit: 'mg',
        },
        THIA: {
          label: 'Thiamin (B1)',
          quantity: 7.580114662552134,
          unit: 'mg',
        },
        RIBF: {
          label: 'Riboflavin (B2)',
          quantity: 3.40290136455282,
          unit: 'mg',
        },
        NIA: {
          label: 'Niacin (B3)',
          quantity: 45.881123703909466,
          unit: 'mg',
        },
        VITB6A: {
          label: 'Vitamin B6',
          quantity: 1.0873681957234116,
          unit: 'mg',
        },
        FOLDFE: {
          label: 'Folate equivalent (total)',
          quantity: 1795.5656365958646,
          unit: 'µg',
        },
        FOLFD: {
          label: 'Folate (food)',
          quantity: 485.50313659586453,
          unit: 'µg',
        },
        FOLAC: {
          label: 'Folic acid',
          quantity: 770.625,
          unit: 'µg',
        },
        VITB12: {
          label: 'Vitamin B12',
          quantity: 0.1498,
          unit: 'µg',
        },
        VITD: {
          label: 'Vitamin D',
          quantity: 0.5553333333333333,
          unit: 'µg',
        },
        TOCPHA: {
          label: 'Vitamin E',
          quantity: 9.630200297359673,
          unit: 'mg',
        },
        VITK1: {
          label: 'Vitamin K',
          quantity: 35.32538554183929,
          unit: 'µg',
        },
        'Sugar.alcohol': {
          label: 'Sugar alcohol',
          quantity: 0,
          unit: 'g',
        },
        WATER: {
          label: 'Water',
          quantity: 1052.8575604934392,
          unit: 'g',
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: 'Energy',
          quantity: 131.04919194179215,
          unit: '%',
        },
        FAT: {
          label: 'Fat',
          quantity: 109.01311879959779,
          unit: '%',
        },
        FASAT: {
          label: 'Saturated',
          quantity: 120.73084524434046,
          unit: '%',
        },
        CHOCDF: {
          label: 'Carbs',
          quantity: 140.67486689250728,
          unit: '%',
        },
        FIBTG: {
          label: 'Fiber',
          quantity: 106.81885359423681,
          unit: '%',
        },
        PROCNT: {
          label: 'Protein',
          quantity: 146.12793819513794,
          unit: '%',
        },
        CHOLE: {
          label: 'Cholesterol',
          quantity: 36.22888888888889,
          unit: '%',
        },
        NA: {
          label: 'Sodium',
          quantity: 157.59397748233962,
          unit: '%',
        },
        CA: {
          label: 'Calcium',
          quantity: 33.42914653040551,
          unit: '%',
        },
        MG: {
          label: 'Magnesium',
          quantity: 49.698435844751685,
          unit: '%',
        },
        K: {
          label: 'Potassium',
          quantity: 37.64930198025639,
          unit: '%',
        },
        FE: {
          label: 'Iron',
          quantity: 144.8811832003299,
          unit: '%',
        },
        ZN: {
          label: 'Zinc',
          quantity: 57.27079624128139,
          unit: '%',
        },
        P: {
          label: 'Phosphorus',
          quantity: 107.15095724971626,
          unit: '%',
        },
        VITA_RAE: {
          label: 'Vitamin A',
          quantity: 45.250132995460234,
          unit: '%',
        },
        VITC: {
          label: 'Vitamin C',
          quantity: 77.04334111159538,
          unit: '%',
        },
        THIA: {
          label: 'Thiamin (B1)',
          quantity: 631.6762218793446,
          unit: '%',
        },
        RIBF: {
          label: 'Riboflavin (B2)',
          quantity: 261.76164342714,
          unit: '%',
        },
        NIA: {
          label: 'Niacin (B3)',
          quantity: 286.7570231494342,
          unit: '%',
        },
        VITB6A: {
          label: 'Vitamin B6',
          quantity: 83.64370736333935,
          unit: '%',
        },
        FOLDFE: {
          label: 'Folate equivalent (total)',
          quantity: 448.89140914896615,
          unit: '%',
        },
        VITB12: {
          label: 'Vitamin B12',
          quantity: 6.241666666666666,
          unit: '%',
        },
        VITD: {
          label: 'Vitamin D',
          quantity: 3.7022222222222223,
          unit: '%',
        },
        TOCPHA: {
          label: 'Vitamin E',
          quantity: 64.20133531573116,
          unit: '%',
        },
        VITK1: {
          label: 'Vitamin K',
          quantity: 29.43782128486607,
          unit: '%',
        },
      },
      digest: [
        {
          label: 'Fat',
          tag: 'FAT',
          schemaOrgTag: 'fatContent',
          total: 70.85852721973856,
          hasRDI: true,
          daily: 109.01311879959779,
          unit: 'g',
          sub: [
            {
              label: 'Saturated',
              tag: 'FASAT',
              schemaOrgTag: 'saturatedFatContent',
              total: 24.146169048868092,
              hasRDI: true,
              daily: 120.73084524434046,
              unit: 'g',
            },
            {
              label: 'Trans',
              tag: 'FATRN',
              schemaOrgTag: 'transFatContent',
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: 'g',
            },
            {
              label: 'Monounsaturated',
              tag: 'FAMS',
              schemaOrgTag: null,
              total: 32.422316318640384,
              hasRDI: false,
              daily: 0,
              unit: 'g',
            },
            {
              label: 'Polyunsaturated',
              tag: 'FAPU',
              schemaOrgTag: null,
              total: 8.52380890119751,
              hasRDI: false,
              daily: 0,
              unit: 'g',
            },
          ],
        },
        {
          label: 'Carbs',
          tag: 'CHOCDF',
          schemaOrgTag: 'carbohydrateContent',
          total: 422.0246006775219,
          hasRDI: true,
          daily: 140.67486689250728,
          unit: 'g',
          sub: [
            {
              label: 'Carbs (net)',
              tag: 'CHOCDF.net',
              schemaOrgTag: null,
              total: 395.3198872789627,
              hasRDI: false,
              daily: 0,
              unit: 'g',
            },
            {
              label: 'Fiber',
              tag: 'FIBTG',
              schemaOrgTag: 'fiberContent',
              total: 26.7047133985592,
              hasRDI: true,
              daily: 106.81885359423681,
              unit: 'g',
            },
            {
              label: 'Sugars',
              tag: 'SUGAR',
              schemaOrgTag: 'sugarContent',
              total: 30.215096388254253,
              hasRDI: false,
              daily: 0,
              unit: 'g',
            },
            {
              label: 'Sugars, added',
              tag: 'SUGAR.added',
              schemaOrgTag: null,
              total: 6.137700000000001,
              hasRDI: false,
              daily: 0,
              unit: 'g',
            },
          ],
        },
        {
          label: 'Protein',
          tag: 'PROCNT',
          schemaOrgTag: 'proteinContent',
          total: 73.06396909756897,
          hasRDI: true,
          daily: 146.12793819513794,
          unit: 'g',
        },
        {
          label: 'Cholesterol',
          tag: 'CHOLE',
          schemaOrgTag: 'cholesterolContent',
          total: 108.68666666666667,
          hasRDI: true,
          daily: 36.22888888888889,
          unit: 'mg',
        },
        {
          label: 'Sodium',
          tag: 'NA',
          schemaOrgTag: 'sodiumContent',
          total: 3782.255459576151,
          hasRDI: true,
          daily: 157.59397748233962,
          unit: 'mg',
        },
        {
          label: 'Calcium',
          tag: 'CA',
          schemaOrgTag: null,
          total: 334.29146530405507,
          hasRDI: true,
          daily: 33.42914653040551,
          unit: 'mg',
        },
        {
          label: 'Magnesium',
          tag: 'MG',
          schemaOrgTag: null,
          total: 208.73343054795708,
          hasRDI: true,
          daily: 49.698435844751685,
          unit: 'mg',
        },
        {
          label: 'Potassium',
          tag: 'K',
          schemaOrgTag: null,
          total: 1769.5171930720503,
          hasRDI: true,
          daily: 37.64930198025639,
          unit: 'mg',
        },
        {
          label: 'Iron',
          tag: 'FE',
          schemaOrgTag: null,
          total: 26.07861297605938,
          hasRDI: true,
          daily: 144.8811832003299,
          unit: 'mg',
        },
        {
          label: 'Zinc',
          tag: 'ZN',
          schemaOrgTag: null,
          total: 6.299787586540953,
          hasRDI: true,
          daily: 57.27079624128139,
          unit: 'mg',
        },
        {
          label: 'Phosphorus',
          tag: 'P',
          schemaOrgTag: null,
          total: 750.0567007480139,
          hasRDI: true,
          daily: 107.15095724971626,
          unit: 'mg',
        },
        {
          label: 'Vitamin A',
          tag: 'VITA_RAE',
          schemaOrgTag: null,
          total: 407.25119695914213,
          hasRDI: true,
          daily: 45.250132995460234,
          unit: 'µg',
        },
        {
          label: 'Vitamin C',
          tag: 'VITC',
          schemaOrgTag: null,
          total: 69.33900700043584,
          hasRDI: true,
          daily: 77.04334111159538,
          unit: 'mg',
        },
        {
          label: 'Thiamin (B1)',
          tag: 'THIA',
          schemaOrgTag: null,
          total: 7.580114662552134,
          hasRDI: true,
          daily: 631.6762218793446,
          unit: 'mg',
        },
        {
          label: 'Riboflavin (B2)',
          tag: 'RIBF',
          schemaOrgTag: null,
          total: 3.40290136455282,
          hasRDI: true,
          daily: 261.76164342714,
          unit: 'mg',
        },
        {
          label: 'Niacin (B3)',
          tag: 'NIA',
          schemaOrgTag: null,
          total: 45.881123703909466,
          hasRDI: true,
          daily: 286.7570231494342,
          unit: 'mg',
        },
        {
          label: 'Vitamin B6',
          tag: 'VITB6A',
          schemaOrgTag: null,
          total: 1.0873681957234116,
          hasRDI: true,
          daily: 83.64370736333935,
          unit: 'mg',
        },
        {
          label: 'Folate equivalent (total)',
          tag: 'FOLDFE',
          schemaOrgTag: null,
          total: 1795.5656365958646,
          hasRDI: true,
          daily: 448.89140914896615,
          unit: 'µg',
        },
        {
          label: 'Folate (food)',
          tag: 'FOLFD',
          schemaOrgTag: null,
          total: 485.50313659586453,
          hasRDI: false,
          daily: 0,
          unit: 'µg',
        },
        {
          label: 'Folic acid',
          tag: 'FOLAC',
          schemaOrgTag: null,
          total: 770.625,
          hasRDI: false,
          daily: 0,
          unit: 'µg',
        },
        {
          label: 'Vitamin B12',
          tag: 'VITB12',
          schemaOrgTag: null,
          total: 0.1498,
          hasRDI: true,
          daily: 6.241666666666666,
          unit: 'µg',
        },
        {
          label: 'Vitamin D',
          tag: 'VITD',
          schemaOrgTag: null,
          total: 0.5553333333333333,
          hasRDI: true,
          daily: 3.7022222222222223,
          unit: 'µg',
        },
        {
          label: 'Vitamin E',
          tag: 'TOCPHA',
          schemaOrgTag: null,
          total: 9.630200297359673,
          hasRDI: true,
          daily: 64.20133531573116,
          unit: 'mg',
        },
        {
          label: 'Vitamin K',
          tag: 'VITK1',
          schemaOrgTag: null,
          total: 35.32538554183929,
          hasRDI: true,
          daily: 29.43782128486607,
          unit: 'µg',
        },
        {
          label: 'Sugar alcohols',
          tag: 'Sugar.alcohol',
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: 'g',
        },
        {
          label: 'Water',
          tag: 'WATER',
          schemaOrgTag: null,
          total: 1052.8575604934392,
          hasRDI: false,
          daily: 0,
          unit: 'g',
        },
      ],
    },
    _links: {
      self: {
        title: 'Self',
        href: 'https://api.edamam.com/api/recipes/v2/1b6dfeaf0988f96b187c7c9bb69a14fa?type=public&app_id=d4011997&app_key=3ace1096e31d8ac7f04a8cadd5a187c0',
      },
    },
  },
];
