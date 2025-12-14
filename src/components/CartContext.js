// components/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setProdutos(prev => {
      const produtoExistente = prev.find(p => p.id === produto.id);
      
      if (produtoExistente) {
        return prev.map(p =>
          p.id === produto.id 
            ? { ...p, quantidade: p.quantidade + 1 }
            : p
        );
      } else {
        // Estrutura padrão para todos os produtos
        return [...prev, { 
          id: produto.id,
          nome: produto.nome || produto.titulo || 'Produto',
          preco: produto.preco || produto.valor || 0,
          quantidade: 1,
          imagem: produto.imagem || produto.image || produto.img || '/images/placeholder.jpg',
          estoque: produto.estoque || 99
        }];
      }
    });
  };

  const removerDoCarrinho = (id) => {
    setProdutos(prev => prev.filter(p => p.id !== id));
  };

  const atualizarQuantidade = (id, quantidade) => {
    setProdutos(prev => 
      prev.map(p => 
        p.id === id ? { ...p, quantidade: Math.max(1, quantidade) } : p
      )
    );
  };

  const limparCarrinho = () => {
    setProdutos([]);
  };

  return (
    <CartContext.Provider value={{
      produtos,
      adicionarAoCarrinho,
      removerDoCarrinho,
      atualizarQuantidade,
      limparCarrinho
    }}>
      {children}
    </CartContext.Provider>
  );
};