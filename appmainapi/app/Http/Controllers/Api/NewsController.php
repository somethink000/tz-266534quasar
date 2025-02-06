<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsobjStoreRequest;
use Illuminate\Http\Request;
use App\Models\Newsobj;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource. 
     */
    public function index()
    {
        return Newsobj::get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NewsobjStoreRequest $request)
    {   
        return Newsobj::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Newsobj $newsobj)
    {
        return $newsobj;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(NewsobjStoreRequest $request, Newsobj $newsobj)
    {
        $newsobj->update($request->all());

        return $newsobj;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Newsobj $newsobj)
    {
        return $newsobj->delete();
    }
}
