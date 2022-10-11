const volume = document.querySelector('#volume');
                                        const output = document.querySelector('.order__output');
                        
                                        output.textContent = volume.value;
                        
                                        volume.addEventListener ('input', () => {
                                            output.textContent = volume.value;
                                        });