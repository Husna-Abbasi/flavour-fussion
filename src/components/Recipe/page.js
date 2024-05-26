'use client'
import React, {Fragment, useEffect, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";

const Recipe = () => {
    const [editingId, setEditingId] = useState(null);
    const [editingCategory, setEditingCategory] = useState("");
    const [open, setOpen] = useState(false);
    const [newCategory, setNewCategory] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");


    const deleteCategory = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/recipes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete category');
            }
            console.log('Category deleted successfully');
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };
    const handleDelete = (id) => {
        deleteCategory(id);
    };

    const createCategory = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newCategory, ingredients: ingredients, instructions: instructions}),
            });
            if (response.ok) {
                console.log('Category created successfully');
                setNewCategory("");
                setOpen(false);
            } else {
                console.error('Failed to create category');
            }
        } catch (error) {
            console.error('Failed to create category', error);
        }
    };
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/recipes')
            .then(response => response.json())
            .then(data => setRecipe(data))
            .catch(error => console.error('Error fetching recipe:', error));
    }, []);
    return (
        <section
            id="tips"
            aria-labelledby="pricing-title"
            className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
        >
            <div className="bg-white h-[95vh] text-blue">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold leading-6 text-grey">Recipe</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                A list of all the Recipes.
                            </p>
                        </div>
                        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">

                            <button
                                type="button"
                                className="block rounded-md bg-orange px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-ffOrange "
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                Create Recipe
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                    <tr>
                                        <th scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-grey sm:pl-0">
                                            Recipe
                                        </th>
                                        <th scope="col" className="text-gray-500 relative py-3.5 pl-3 pr-4 sm:pr-0">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                    {recipe && recipe?.map((rec) => (
                                        <tr key={rec.id}>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">{rec.title}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 "> {rec.ingredients}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 "> {rec.instructions}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                <button onClick={() => handleDelete(rec._id)}
                                                        className="text-gray-100 hover:text-indigo-900 bg-red-200 px-2 border border-red-300 rounded">Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog className="relative z-10" onClose={setOpen}>
                    <div className="fixed inset-0"/>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title
                                                        className="text-base font-semibold leading-6 text-gray-900">
                                                        Panel title
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="absolute -inset-2.5"/>
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <aside className="">
                                                    <div className="flex flex-col bg-white rounded-lg">
                                                        <div className=" flex justify-between pr-6 pl-6 pt-1">
                                                            <div className="font-medium">Create Recipe</div>
                                                            <div
                                                                className="mt-20 text-gray-400 bg-gray-200 flex justify-center items-center px-2 rounded text-sm cursor-pointer"
                                                                onClick={() => setOpen(false)}>Close
                                                            </div>
                                                        </div>
                                                        <div className="mt-10 text-gray-500 flex flex-col gap-2">
                                                            <input
                                                                type="text"
                                                                value={newCategory}
                                                                onChange={(e) => setNewCategory(e.target.value)}
                                                                className="w-full outline-0 text-gray-500 border border-gray-300 rounded-md px-2 py-1"
                                                                placeholder="New Category"
                                                            />
                                                            <input
                                                                type="text"
                                                                value={ingredients}
                                                                onChange={(e) => setIngredients(e.target.value)}
                                                                className="w-full outline-0 text-gray-500 border border-gray-300 rounded-md px-2 py-1"
                                                                placeholder="ingredients"
                                                            />
                                                            <input
                                                                type="text"
                                                                value={instructions}
                                                                onChange={(e) => setInstructions(e.target.value)}
                                                                className="w-full outline-0 text-gray-500 border border-gray-300 rounded-md px-2 py-1"
                                                                placeholder="instructions"
                                                            />
                                                            <button
                                                                onClick={createCategory}
                                                                className="flex mt-4 rounded-md bg-orange px-6 py-2 text-center text-sm font-semibold text-white shadow-sm "
                                                            >
                                                                Create
                                                            </button>
                                                        </div>
                                                    </div>
                                                </aside>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </section>
    );
};

export default Recipe;