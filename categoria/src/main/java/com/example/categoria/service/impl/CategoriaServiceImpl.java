package com.example.categoria.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.categoria.entity.Categoria;
import com.example.categoria.repository.CategoriaRepository;
import com.example.categoria.service.CategoriaService;

@Service
public class CategoriaServiceImpl implements CategoriaService {
    @Autowired
    private CategoriaRepository categoriaRepository;

    @Override
    public List<Categoria> listar() {
        return categoriaRepository.findAll();
    }

    @Override
    public Categoria guardar(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public Optional<Categoria> actualizar(Integer id, Categoria categoria) {
        return categoriaRepository.findById(id).map(existingCategoria -> {
            existingCategoria.setTitulo(categoria.getTitulo());
            existingCategoria.setDescripccion(categoria.getDescripccion());
            return categoriaRepository.save(existingCategoria);
        });
    }

    @Override
    public Optional<Categoria> listarPorId(Integer id) {
        return categoriaRepository.findById(id);
    }

    @Override
    public void eliminarPorId(Integer id) {
        categoriaRepository.deleteById(id);
    }
}
