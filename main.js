// Nutrition Tracking API - Fetch Implementations
// Created: 2025-12-19 23:02:23 UTC

const API_BASE_URL = 'https://api.nutrition-tracker.com/api';
// Backend API URL for food and BMI calculator endpoints
const BACKEND_API_URL = 'http://localhost:5000/api';

/**
 * Fetch all users nutrition data
 * @returns {Promise<Array>} Array of user nutrition records
 */
async function fetchAllNutritionData() {
  try {
    const response = await fetch(`${API_BASE_URL}/nutrition`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error;
  }
}

/**
 * Fetch nutrition data for a specific user
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User nutrition data
 */
async function fetchUserNutrition(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/nutrition/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching nutrition data for user ${userId}:`, error);
    throw error;
  }
}

/**
 * Fetch nutrition data for a specific date
 * @param {string} userId - User ID
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise<Object>} Nutrition data for the specified date
 */
async function fetchNutritionByDate(userId, date) {
  try {
    const response = await fetch(`${API_BASE_URL}/nutrition/${userId}/${date}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching nutrition data for date ${date}:`, error);
    throw error;
  }
}

/**
 * Create new nutrition record
 * @param {Object} nutritionData - Nutrition data object
 * @returns {Promise<Object>} Created nutrition record
 */
async function createNutritionRecord(nutritionData) {
  try {
    const response = await fetch(`${API_BASE_URL}/nutrition`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nutritionData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating nutrition record:', error);
    throw error;
  }
}

/**
 * Update existing nutrition record
 * @param {string} recordId - Record ID
 * @param {Object} updateData - Updated nutrition data
 * @returns {Promise<Object>} Updated nutrition record
 */
async function updateNutritionRecord(recordId, updateData) {
  try {
    const response = await fetch(`${API_BASE_URL}/nutrition/${recordId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating nutrition record ${recordId}:`, error);
    throw error;
  }
}

/**
 * Delete nutrition record
 * @param {string} recordId - Record ID
 * @returns {Promise<Object>} Deletion response
 */
async function deleteNutritionRecord(recordId) {
  try {
    const response = await fetch(`${API_BASE_URL}/nutrition/${recordId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error deleting nutrition record ${recordId}:`, error);
    throw error;
  }
}

/**
 * Fetch meal data
 * @returns {Promise<Array>} Array of meals
 */
async function fetchMeals() {
  try {
    const response = await fetch(`${API_BASE_URL}/meals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
}

/**
 * Create new meal
 * @param {Object} mealData - Meal data object
 * @returns {Promise<Object>} Created meal
 */
async function createMeal(mealData) {
  try {
    const response = await fetch(`${API_BASE_URL}/meals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mealData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating meal:', error);
    throw error;
  }
}

/**
 * Fetch daily nutrition summary
 * @param {string} userId - User ID
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise<Object>} Daily nutrition summary
 */
async function fetchDailySummary(userId, date) {
  try {
    const response = await fetch(`${API_BASE_URL}/nutrition/summary/${userId}/${date}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching daily summary for ${date}:`, error);
    throw error;
  }
}

/**
 * Fetch nutrition goals
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User nutrition goals
 */
async function fetchNutritionGoals(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/goals/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching nutrition goals for user ${userId}:`, error);
    throw error;
  }
}

/**
 * Update nutrition goals
 * @param {string} userId - User ID
 * @param {Object} goalsData - Goals data object
 * @returns {Promise<Object>} Updated goals
 */
async function updateNutritionGoals(userId, goalsData) {
  try {
    const response = await fetch(`${API_BASE_URL}/goals/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(goalsData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating nutrition goals for user ${userId}:`, error);
    throw error;
  }
}

/**
 * Search foods by name
 * @param {string} searchTerm - Food search term
 * @returns {Promise<Array>} Array of matching foods
 */
async function searchFoods(searchTerm) {
  try {
    const params = new URLSearchParams({ q: searchTerm });
    const response = await fetch(`${API_BASE_URL}/foods/search?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error searching foods for "${searchTerm}":`, error);
    throw error;
  }
}

/**
 * Fetch food details by ID
 * @param {string} foodId - Food ID
 * @returns {Promise<Object>} Food details including nutrition info
 */
async function fetchFoodDetails(foodId) {
  try {
    const response = await fetch(`${API_BASE_URL}/foods/${foodId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching food details for ${foodId}:`, error);
    throw error;
  }
}

// ============================================================
// Backend API Functions - Food and BMI Calculator Endpoints
// ============================================================

/**
 * Get all foods from backend
 * @returns {Promise<Array>} Array of food items
 */
async function getAllFoods() {
  try {
    const response = await fetch(`${BACKEND_API_URL}/food`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching all foods:', error);
    throw error;
  }
}

/**
 * Get food by ID from backend
 * @param {string|number} id - Food ID
 * @returns {Promise<Object>} Food object
 */
async function getFoodById(id) {
  try {
    const response = await fetch(`${BACKEND_API_URL}/food/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching food with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Create a new food item
 * @param {Object} foodData - Food data object
 * @returns {Promise<Object>} Created food object
 */
async function createFood(foodData) {
  try {
    const response = await fetch(`${BACKEND_API_URL}/food`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating food:', error);
    throw error;
  }
}

/**
 * Update an existing food item
 * @param {string|number} id - Food ID
 * @param {Object} foodData - Updated food data
 * @returns {Promise<Object>} Updated food object
 */
async function updateFood(id, foodData) {
  try {
    const response = await fetch(`${BACKEND_API_URL}/food/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating food with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a food item
 * @param {string|number} id - Food ID
 * @returns {Promise<Object>} Deletion response
 */
async function deleteFood(id) {
  try {
    const response = await fetch(`${BACKEND_API_URL}/food/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error deleting food with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Calculate BMI and macros
 * @param {Object} data - User data (weight, height, age, gender, activity level, goal)
 * @returns {Promise<Object>} BMI and macro calculations
 */
async function calculateMacros(data) {
  try {
    const response = await fetch(`${BACKEND_API_URL}/bmicalculator/calculate-macros`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error calculating macros:', error);
    throw error;
  }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fetchAllNutritionData,
    fetchUserNutrition,
    fetchNutritionByDate,
    createNutritionRecord,
    updateNutritionRecord,
    deleteNutritionRecord,
    fetchMeals,
    createMeal,
    fetchDailySummary,
    fetchNutritionGoals,
    updateNutritionGoals,
    searchFoods,
    fetchFoodDetails,
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood,
    calculateMacros,
  };
}
